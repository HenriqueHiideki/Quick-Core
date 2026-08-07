import { ProgressBar } from '../ProgressBar/PorgressBar'
import './cards-style.css'
import { CardText } from './CardsText'

export function Cards(){
    return(
        <div className='cards'>
            <CardText>Qual linguagem usar no projeto?</CardText>
            <ProgressBar label="Java" percentage={58} />
            <ProgressBar label="C#" percentage={32} />
            <hr className='card-line' />
        </div>
    )
}