import styles from './sidebar.module.css'
import { IoFileTray } from 'react-icons/io5'
import { FaBeer } from 'react-icons/fa'

import Link from './link/link'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link
              href="/inbox"
              label="Inbox"
              leftIcon={<IoFileTray size="20px" color="#279be6" />}
            />
          </li>
          <li>
            <Link
              href="/today"
              label="Today"
              leftIcon={<FaBeer size="20px" color="orange" />}
            />
          </li>
        </ul>
      </nav>
    </aside>
  )
}
