import { useNavigate } from 'react-router-dom'
import { ProgressBar } from '../ProgressBar/PorgressBar'
import './cards-style.css'
import { CardText } from './CardsText'

export function Cards({ poll, children }) {
  const navigate = useNavigate()

  const totalVotes = poll?.options?.reduce((acc, option) => {
    return acc + (option.votes || 0)
  }, 0) || 0

  return (
    <div className='cards' onClick={() => navigate(`/vote/${poll.id}`)}>
      <img src="icon-dot.png" className='card-img' alt="Opções" />
      <CardText>{children}</CardText>

      {poll?.options?.map((option) => {
        const optionVotes = option.votes || 0
        const percentage = totalVotes > 0 ? Math.round((optionVotes / totalVotes) * 100) : 0

        return (
          <ProgressBar
            key={option.id}
            label={option.option_text}
            percentage={percentage}
          />
        )
      })}

      <hr className='card-line' />

      <div className='footer-item'>
        <img src="icon-votes.png" alt="Votos" className='card-img' />
        <span>{totalVotes.toLocaleString('pt-BR')} votos</span>
      </div>

      <div className='footer-item time'>
        <img src="icon-watch.png" alt="Tempo" className='card-img' />
        <span>Ativa</span>
      </div>
    </div>
  )
}