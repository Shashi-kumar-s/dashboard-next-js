import styles from "@/app/ui/dashboard/pagination/pagination.module.css"
import DashboardButton from "../button/Button"

const Pagination = () => {
  return (
    <div className={styles.paginationBtn}>
    <DashboardButton btnStyle={styles.pagination} value={"Prev"} />
    <DashboardButton btnStyle={styles.pagination} value={"Next"} />
  </div>
  )
}

export default Pagination
