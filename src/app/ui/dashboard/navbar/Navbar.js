'use client'
import styles from "@/app/ui/dashboard/navbar/navbar.module.css"
import { usePathname } from "next/navigation"
import { MdChat, MdNotificationsActive, MdPublic, MdSearch } from "react-icons/md"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
          <div className={styles.search}>
           <MdSearch/>
           <input placeholder="Search" className={styles.input}/>
          </div>
          <div className={styles.notification}>
            <MdChat/>
            <MdNotificationsActive />
            <MdPublic/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
