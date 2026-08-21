import './cards-style.css'

export function CardText(props){
    return (
        <p className='cards-text'>{props.children}</p>
    )
}