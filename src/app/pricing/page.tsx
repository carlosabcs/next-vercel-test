import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function Pricing() {
  return (
    <>
      <div className={styles.center}>
        <h1>Pricing!!</h1>
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
