import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside>
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
