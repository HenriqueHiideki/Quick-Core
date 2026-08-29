import './button.estilos.css'

export function ButtonCreatePoll({ children, ...rest }) {
  return (
    <button className='button-create-poll' {...rest}>
      {children}
    </button>
  )
}