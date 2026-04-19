'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styles from './Layout.module.css'

interface User {
  username: string
  name: string
}

export default function Layout({
  children,
  user,
}: {
  children: React.ReactNode
  user: User
}) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.brand}>🏠 Katbileras</span>
        <nav className={styles.nav}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Inicio
          </Link>
          <Link
            href="/supermercado"
            className={pathname === '/supermercado' ? styles.active : ''}
          >
            Supermercado
          </Link>
        </nav>
        <div className={styles.userArea}>
          <span className={styles.userName}>{user.name}</span>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Salir
          </button>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
