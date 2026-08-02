import './title-estilos.css'

export function Title(props){
    return (
        <h2 className='title-style'>
            {props.children}
        </h2>
    )
}