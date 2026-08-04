import './search-bar.css'

export function SearchBar(props){
    return(
        <div className='search-bar-style'>
            {props.children}
            <img src="/icon-search.png" alt="icone de pesquisa" className='icon-search-bar'/>
        </div>
    )
}