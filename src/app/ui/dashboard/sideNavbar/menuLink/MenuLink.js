'use client'
import styles from "@/app/ui/dashboard/sideNavbar/menuLink/menuLink.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation";


const MenuLink = ({ ele }) => {
    const pathname = usePathname()
    return (
        <Link href={ele.path}
            className={`${styles.container} ${pathname === ele.path && styles.active}`}>
            {ele.icon}{ele.title}
        </Link>
    )
}

export default MenuLink
