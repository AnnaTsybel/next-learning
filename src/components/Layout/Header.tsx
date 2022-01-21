import Link from "next/link";

import styles from'../../../styles/Home.module.scss'
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p>dbhsh</p>
    </header>
  );
}
