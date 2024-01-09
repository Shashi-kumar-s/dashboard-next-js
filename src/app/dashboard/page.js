"use client"
import styles from "@/app/dashboard/dashboard.module.css"
import Card from "../ui/dashboard/card/Card"
import Chart from "../ui/dashboard/chart/Chart"
import RightBar from "../ui/dashboard/rightbar/RightBar"
import Transaction from "../ui/dashboard/transaction/Transaction"


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Transaction />
        </div>
        <div>
          <Chart />
        </div>
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard
