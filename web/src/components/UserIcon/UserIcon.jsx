import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './user-icon.estilos.css'

export function UserIcon() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="user-icon-container" ref={menuRef}>
      <img
        src="/user-icon.png"
        className="user-icon-style"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="user-icon-dropdown">
          {user && <p className="user-icon-name">{user.name}</p>}
          <button className="user-icon-logout" onClick={handleLogout}>
            Sair
          </button>
        </div>
      )}
    </div>
  )
}