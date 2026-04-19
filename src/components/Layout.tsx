import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import styles from './Layout.module.css'

export default function Layout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.brand}>🏠 Katbileras</span>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
            Inicio
          </NavLink>
          <NavLink to="/supermercado" className={({ isActive }) => isActive ? styles.active : ''}>
            Supermercado
          </NavLink>
        </nav>
        <div className={styles.userArea}>
          <span className={styles.userName}>{user?.name}</span>
          <button className={styles.logoutBtn} onClick={handleLogout}>Salir</button>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
