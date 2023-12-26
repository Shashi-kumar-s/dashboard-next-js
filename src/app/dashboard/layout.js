import React from 'react'
import SideNavbar from '../ui/dashboard/sideNavbar/SideNavbar'
import Navbar from '../ui/dashboard/navbar/Navbar'
import styles from "@/app/ui/dashboard/dashboard.module.css"

const layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <SideNavbar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default layout
