import { getSession } from '@/lib/auth'
import styles from './Home.module.css'

export default async function HomePage() {
  const session = await getSession()

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Bienvenido a los Katbileras</h1>
      <p className={styles.greeting}>Hola, <strong>{session?.name}</strong> 👋</p>
      <p className={styles.description}>
        Tu espacio familiar para organizar y llevar el control de todo lo que necesitan.
      </p>
    </div>
  )
}
