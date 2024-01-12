import styles from "@/app/app.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <Link href={"/login"} className={styles.getStart}>Get Start</Link>
    </main>
  )
}
