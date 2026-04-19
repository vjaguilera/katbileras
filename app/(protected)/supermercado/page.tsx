import styles from './Supermercado.module.css'

export default function SupermercadoPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Supermercado</h1>
      <p className={styles.empty}>Próximamente…</p>
    </div>
  )
}
