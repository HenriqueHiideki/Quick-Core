import { TitleVotes } from '../../components/Title/TitleVotes'
import './vote-style.css'
import { VoteOption } from './VoteOption'

const option = ["TypeScript", "Python", "Rust", "Go"]

export function Vote(){
    return(
        <div className='container-votes'>
            <TitleVotes>Qual linguagem de programação devemos usar no projeto?</TitleVotes>
            <div className='option-list'>
                {option.map((option) => (
                    <VoteOption key={option} value={option}>
                        {option}
                    </VoteOption>
                ))}
            </div>
            <button className='vote-button'>Vote</button>
        </div>
    )
}