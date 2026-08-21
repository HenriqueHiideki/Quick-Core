import './description-style.css'

export function DashboardDescriptionText(props){
    return(
        <p className={`dashboard-description-text ${props.className || ""}`}>{props.children}</p>
    )
}