import './description-style.css'

export function DashboardDescription(props){
    return(
        <p className={`dashboard-description ${props.className || ""}`}>{props.children}</p>
    )
}