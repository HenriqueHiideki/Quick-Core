import { useSearchParams } from 'react-router-dom'
import './search-bar.css'

export function SearchBar({ children }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const handleChange = (e) => {
    const value = e.target.value
    const newParams = new URLSearchParams(searchParams)

    if (value) {
      newParams.set('q', value)
    } else {
      newParams.delete('q')
    }

    setSearchParams(newParams)
  }

  return (
    <div className='search-bar-style'>
      <input
        type="text"
        className="search-bar-input"
        placeholder={children}
        value={query}
        onChange={handleChange}
      />
      <img src="/icon-search.png" alt="icone de pesquisa" className='icon-search-bar' />
    </div>
  )
}