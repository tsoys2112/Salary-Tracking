// src/pages/Analytics/Analytics.jsx
import styles from './Analytics.module.css'

function Analytics() {
  return (
    <div className={styles.analytics}>
      <h1 className={styles.title}>Аналитика</h1>

      <div className={styles.chartsGrid}>
        <div className={styles.chartSection}>
          <h2 className={styles.chartTitle}>Расходы по категориям</h2>
          <div className={styles.placeholder}>
            Графики появятся после подключения данных
          </div>
        </div>

        <div className={styles.chartSection}>
          <h2 className={styles.chartTitle}>Доходы и расходы по месяцам</h2>
          <div className={styles.placeholder}>
            Графики появятся после подключения данных
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics