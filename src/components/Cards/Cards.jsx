import { ProgressBar } from '../ProgressBar/PorgressBar'
import './cards-style.css'
import { CardText } from './CardsText'

export function Cards(props){
    return(
        <div className='cards'>
            <img src="icon-dot.png" className='card-img' />
            <CardText>{props.children}</CardText>
            <ProgressBar label="Java" percentage={58} />
            <ProgressBar label="C#" percentage={32} />
            <hr className='card-line' />

            <div className='footer-item'>
                <img src="icon-votes.png" alt="Votos" className='card-img' />
                <span>1.240 votos</span>
            </div>

            <div className='footer-item time'>
                <img src="icon-watch.png" alt="Tempo" className='card-img' />
                <span>Termina em 2 dias</span>
            </div>
        </div>
    )
}