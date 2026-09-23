// src/pages/Dashboard/Dashboard.jsx
import styles from './Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Главная</h1>
      
      <div className={styles.cardsGrid}>
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Доходы</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-success)' }}>0 ₽</div>
        </div>
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Расходы</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-danger)' }}>0 ₽</div>
        </div>
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Баланс</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>0 ₽</div>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.addButton}>+ Добавить операцию</button>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Последние операции</h2>
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-secondary)' }}>
          Нет операций. Добавьте первую операцию, чтобы начать учёт.
        </div>
      </div>
    </div>
  )
}

export default Dashboard