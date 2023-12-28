'use client'
import styles from "@/app/ui/dashboard/navbar/navbar.module.css"
import { usePathname } from "next/navigation"
import { MdChat, MdNotificationsActive, MdPublic, MdSearch } from "react-icons/md"
import Search from "../search/Search"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <Search placeholder="Search"/> 
        <div className={styles.notification}>
          <MdChat />
          <MdNotificationsActive />
          <MdPublic />
        </div>
      </div>
    </div>
  )
}

export default Navbar
