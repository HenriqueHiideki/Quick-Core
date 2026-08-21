import './progressbar-style.css'

export function ProgressBar({label, percentage}){
    return(
        <div className='progressbar'>
            <div className='progressbar-header'>
                <span className='progressbar-label'>{label}</span>
                <span className='progressbar-percentage'>{percentage}%</span>
            </div>
            <div className='progress-track'>
                <div className='progress-fill' style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    )
}