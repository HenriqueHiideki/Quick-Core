import './filtertabs-style.css'

export function FilterTabs({ children, active, onClick }) {
  return (
    <button
      className={`filter-tab-button ${active ? 'filter-tab-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}