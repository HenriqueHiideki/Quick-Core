import './button.estilos.css'

export function ButtonCreatePoll(props){
    return(
        <button className='button-create-poll'>
            {props.children}
        </button>
    )
}