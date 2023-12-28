import styles from "@/app/ui/dashboard/transaction/transaction.module.css"
import { FaUserCircle } from "react-icons/fa";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.tableTitle}>Name</td>
            <td className={styles.tableTitle}>Status</td>
            <td className={styles.tableTitle}>Date</td>
            <td className={styles.tableTitle}>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}><FaUserCircle size={24} /> Xyxyzxy</td>
            <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
            <td>27.12.2023</td>
            <td>$ 3.200</td>
          </tr>
          <tr>
            <td className={styles.user}><FaUserCircle size={24} /> Abcde</td>
            <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
            <td>10.11.2023</td>
            <td>$ 1.200</td>
          </tr>
          <tr>
            <td className={styles.user}><FaUserCircle size={24} /> Johbne</td>
            <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
            <td>30.09.2023</td>
            <td>$ 4.200</td>
          </tr>
          <tr>
            <td className={styles.user}><FaUserCircle size={24} /> Abcde</td>
            <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
            <td>10.11.2023</td>
            <td>$ 1.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
