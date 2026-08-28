import { useEffect, useState } from 'react'
import { useParams } from 'react'
import { TitleVotes } from '../../components/Title/TitleVotes'
import { getPoll, voteOnPoll } from '../../services/api'
import './vote-style.css'

export function Vote() {
  const { id } = useParams()
  const pollId = id || '4'

  const [poll, setPoll] = useState(null)
  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState('')

  // 1. Busca os dados da enquete na API REST
  useEffect(() => {
    getPoll(pollId)
      .then((data) => {
        setPoll(data)
      })
      .catch((err) => {
        setFeedback(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [pollId])

  // 2. Conecta ao WebSocket para atualizações ao vivo
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:3333/polls/${pollId}/results`)

    ws.onmessage = (event) => {
      const { optionId, votes } = JSON.parse(event.data)

      setPoll((prevPoll) => {
        if (!prevPoll) return prevPoll
        return {
          ...prevPoll,
          options: prevPoll.options.map((option) =>
            option.id === optionId ? { ...option, votes } : option
          ),
        }
      })
    }

    return () => {
      ws.close()
    }
  }, [pollId])

  // 3. Submete o voto via HTTP POST
  const handleVoteSubmit = async () => {
    if (!selectedOptionId) {
      alert('Por favor, selecione uma opção antes de votar.')
      return
    }

    try {
      await voteOnPoll(pollId, selectedOptionId, 1)
      setFeedback('Voto registrado com sucesso!')
    } catch (err) {
      setFeedback(err.message)
    }
  }

  if (isLoading) return <p className="container-votes">Carregando enquete...</p>

  return (
    <div className="container-votes">
      <TitleVotes>{poll?.question || 'Enquete não encontrada'}</TitleVotes>

      <div className="option-list">
        {poll?.options?.map((option) => (
          <label key={option.id} className="checkbox-option">
            <input
              type="radio"
              name="poll-option"
              value={option.id}
              checked={selectedOptionId === option.id}
              onChange={() => setSelectedOptionId(option.id)}
            />
            <span>{option.option_text}</span>
          </label>
        ))}
      </div>

      <button className="vote-button" onClick={handleVoteSubmit}>
        Votar
      </button>

      {feedback && <p style={{ marginTop: '16px', fontWeight: 'bold' }}>{feedback}</p>}
    </div>
  )
}