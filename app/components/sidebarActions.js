import React from 'react'
import Link from 'next/link'
import sidebarActionsStyles from './sidebarActions.module.css'
import footerButtonStyles from './footerButton.module.css'

export default function SidebarActions() {
  return (
    <aside className={sidebarActionsStyles.sidebarActions}>
      <button className={footerButtonStyles.footerButton}> + New List </button>
    </aside>
  )
}
