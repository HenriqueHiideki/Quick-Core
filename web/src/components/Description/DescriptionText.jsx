import './description-style.css'

export function DescriptionText(props){
    return(
        <p className='description-text'>{props.children}</p>
    )
}