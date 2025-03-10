import Link from 'next/link';
import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Software Engineering Blog
      </Link>
      <div className={styles['nav-links']}>
        <Link href="/about" className={styles['nav-link']}>
          About
        </Link>
      </div>
    </nav>
  );
} 