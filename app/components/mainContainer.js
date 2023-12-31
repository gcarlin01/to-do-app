import React from 'react'
import Link from 'next/link'
import styles from './mainContainer.module.css'

export default function MainContainer({ children }) {
  return <main className={styles.mainContainer}>{children}</main>
}
