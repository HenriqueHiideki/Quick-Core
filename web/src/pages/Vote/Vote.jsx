import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

  useEffect(() => {
    getPoll(pollId)
      .then((data) => {
        setPoll(data.poll)
      })
      .catch((err) => {
        setFeedback(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [pollId])

  useEffect(() => {
    const WS_BASE_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:3333'
    const ws = new WebSocket(`${WS_BASE_URL}/polls/${pollId}/results`)

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

  const handleVoteSubmit = async () => {
    if (!selectedOptionId) {
      alert('Por favor, selecione uma opção antes de votar.')
      return
    }

    try {
      await voteOnPoll(pollId, selectedOptionId)
      setFeedback('Voto registrado com sucesso!')
    } catch (err) {
      setFeedback(err.message)
    }
  }

  if (isLoading) return <p className="container-votes">Carregando enquete...</p>

  const totalVotes = poll?.options?.reduce((acc, opt) => acc + (opt.votes || 0), 0) || 0

  return (
    <div className="container-votes">
      <TitleVotes>{poll?.question || 'Enquete não encontrada'}</TitleVotes>

      <div className="option-list">
        {poll?.options?.map((option) => {
          const votes = option.votes || 0
          const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0

          return (
            <label key={option.id} className="checkbox-option">
              <input
                type="radio"
                name="poll-option"
                value={option.id}
                checked={selectedOptionId === option.id}
                onChange={() => setSelectedOptionId(option.id)}
              />
              <span>{option.option_text}</span>
              <span className="option-result">
                {votes} {votes === 1 ? 'voto' : 'votos'} ({percentage}%)
              </span>
            </label>
          )
        })}
      </div>

      <button className="vote-button" onClick={handleVoteSubmit}>
        Votar
      </button>

      {feedback && <p style={{ marginTop: '16px', fontWeight: 'bold' }}>{feedback}</p>}

      <p style={{ marginTop: '8px', color: '#666' }}>
        Total: {totalVotes} {totalVotes === 1 ? 'voto' : 'votos'}
      </p>
    </div>
  )
}