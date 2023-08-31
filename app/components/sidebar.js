import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/inbox">Inbox</Link>
          </li>
          <li>
            <Link href="/today">Today</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
