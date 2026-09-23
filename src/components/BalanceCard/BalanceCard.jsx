// src/components/BalanceCard/BalanceCard.jsx
import styles from './BalanceCard.module.css'

function BalanceCard({ title, amount, color = 'primary' }) {
  const formattedAmount = amount ?? 0
  
  const colorClass = styles[color] || styles.primary

  return (
    <div className={`${styles.card} ${colorClass}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.amount}>{formattedAmount.toLocaleString('ru-RU')} ₽</div>
    </div>
  )
}

export default BalanceCard