// src/pages/History/History.jsx
import { useState } from 'react'
import styles from './History.module.css'

function History() {
  const [typeFilter, setTypeFilter] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  return (
    <div className={styles.history}>
      <h1 className={styles.title}>История операций</h1>

      <div className={styles.filters}>
        <select
          className={styles.filterSelect}
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">Все типы</option>
          <option value="income">Доходы</option>
          <option value="expense">Расходы</option>
        </select>

        <input
          type="date"
          className={styles.filterInput}
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          placeholder="Дата от"
        />

        <input
          type="date"
          className={styles.filterInput}
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          placeholder="Дата до"
        />
      </div>

      <div className={styles.section}>
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-secondary)' }}>
          Нет операций. Перейдите на главную страницу, чтобы добавить операцию.
        </div>
      </div>
    </div>
  )
}

export default History