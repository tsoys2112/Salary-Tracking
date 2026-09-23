// src/components/Modal/Modal.jsx
import { useEffect } from 'react'
import styles from './Modal.module.css'

function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {title && <h2 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.5rem', fontWeight: 600 }}>{title}</h2>}
        {children}
      </div>
    </div>
  )
}

export default Modal