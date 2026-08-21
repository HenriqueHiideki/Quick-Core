import './filtertabs-style.css'

export function FilterTabs(props){
    return(
        <button className='filter-tab-button'>
            {props.children}
        </button>
    )
}