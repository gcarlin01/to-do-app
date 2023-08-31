import { Inter } from 'next/font/google'
import Sidebar from './components/sidebar'
import styles from './layout.module.css'
import './globals.css'
import SidebarActions from './components/sidebarActions'
import MainContainer from './components/mainContainer'
import MainActions from './components/mainActions'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-Do App',
  description: 'Task manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Sidebar />
          <MainContainer>{children}</MainContainer>
          <SidebarActions />
          <MainActions />
        </div>
      </body>
    </html>
  )
}
