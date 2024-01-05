"use client"
import styles from "@/app/ui/dashboard/transaction/transaction.module.css"
import { FaUserCircle } from "react-icons/fa";

const transactionDataTitle = ["Name", "Status", "Date", "Amount"]
const transactionData = [
  { id: "1", username: "Xyxyzxy", status: "Pending", date: "27.12.2023", amount: "3.200" },
  { id: "2", username: "Abcde", status: "Done", date: "10.11.2023", amount: "1.400" },
  { id: "3", username: "Johbne", status: "Cancelled", date: "30.09.2023", amount: "4.100" },
  { id: "4", username: "Bbcde", status: "Cancelled", date: "20.08.2023", amount: "5.200" },
]

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr >
            {transactionDataTitle.map(ele => <td key={ele} className={styles.tableTitle}>{ele}</td>)}
          </tr>
        </thead>
        <tbody>
          {transactionData.map((ele) => {
            return (
              <tr key={ele.id}>
                <td className={styles.user}><FaUserCircle size={24} />{ele.username}</td>
                <td><span className={`${styles.stat} ${styles[ele.status]}`}>{ele.status}</span></td>
                <td>{ele.date}</td>
                <td>$ {ele.amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
