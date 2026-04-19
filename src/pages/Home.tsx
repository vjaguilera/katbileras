import { useAuth } from '../contexts/AuthContext'
import styles from './Home.module.css'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Bienvenido a los Katbileras</h1>
      <p className={styles.greeting}>Hola, <strong>{user?.name}</strong> 👋</p>
      <p className={styles.description}>
        Tu espacio familiar para organizar y llevar el control de todo lo que necesitan.
      </p>
    </div>
  )
}
