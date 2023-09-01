import NextLink from 'next/link'
import { IoFileTray } from 'react-icons/io5'
import styles from './link.module.css'

export default function Link({ href, label, leftIcon }) {
  return (
    <NextLink href={href} className={styles.container}>
      {leftIcon} {label}
    </NextLink>
  )
}
