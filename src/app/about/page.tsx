import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <div className={styles.description}>
        <p>Go to <Link href="/">Page</Link></p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </>
  );
}
