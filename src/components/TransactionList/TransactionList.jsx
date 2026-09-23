// src/components/TransactionList/TransactionList.jsx
import EmptyState from '../EmptyState/EmptyState'
import styles from './TransactionList.module.css'

function TransactionList({ transactions = [], onEdit, onDelete }) {
  if (!transactions || transactions.length === 0) {
    return (
      <EmptyState
        title="Нет операций"
        description="Добавьте первую операцию, чтобы начать учёт финансов"
      />
    )
  }

  const getCategoryLabel = (type, categoryId) => {
    // Fallback: пока константы не подключены, используем id категории
    const incomeLabels = {
      salary: 'Зарплата',
      freelance: 'Подработка',
      bonus: 'Премия',
      debt_return: 'Возврат долга',
      deposit_interest: 'Проценты по вкладу',
      gift: 'Подарок',
      other: 'Прочее',
    }
    const expenseLabels = {
      groceries: 'Продукты',
      utilities: 'Коммуналка',
      rent: 'Аренда',
      subscriptions: 'Подписки',
      transport: 'Транспорт',
      health: 'Здоровье',
      clothing: 'Одежда',
      entertainment: 'Развлечения',
      communication: 'Связь',
      other: 'Прочее',
    }
    const labels = type === 'income' ? incomeLabels : expenseLabels
    return labels[categoryId] || categoryId || 'Без категории'
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    try {
      return new Date(dateString).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  return (
    <div className={styles.list}>
      {(transactions || []).map((transaction) => {
        const isIncome = transaction?.type === 'income'
        return (
          <div key={transaction?.id} className={styles.row}>
            <div
              className={`${styles.icon} ${
                isIncome ? styles.incomeIcon : styles.expenseIcon
              }`}
            >
              {isIncome ? '💰' : '💸'}
            </div>
            <div className={styles.info}>
              <div className={styles.category}>
                {getCategoryLabel(transaction?.type, transaction?.category)}
              </div>
              {transaction?.comment && (
                <div className={styles.comment}>{transaction.comment}</div>
              )}
            </div>
            <div className={styles.date}>{formatDate(transaction?.date)}</div>
            <div
              className={`${styles.amount} ${
                isIncome ? styles.amountIncome : styles.amountExpense
              }`}
            >
              {isIncome ? '+' : '−'}
              {(transaction?.amount ?? 0).toLocaleString('ru-RU')} ₽
            </div>
            <div className={styles.actions}>
              {onEdit && (
                <button
                  className={styles.actionButton}
                  onClick={() => onEdit(transaction)}
                  title="Редактировать"
                >
                  ✏️
                </button>
              )}
              {onDelete && (
                <button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => onDelete(transaction?.id)}
                  title="Удалить"
                >
                  🗑️
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TransactionList