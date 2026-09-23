// src/components/EmptyState/EmptyState.jsx
import styles from './EmptyState.module.css'

function EmptyState({ 
  title = 'Нет данных', 
  description = 'Данные появятся после добавления', 
  actionLabel, 
  onAction 
}) {
  return (
    <div className={styles.emptyState}>
      <div className={styles.icon}>📭</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {actionLabel && onAction && (
        <button className={styles.actionButton} onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState