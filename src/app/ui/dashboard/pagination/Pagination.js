import styles from "@/app/ui/dashboard/pagination/pagination.module.css"
import DashboardButton from "../button/Button"

const Pagination = ({ setCurrentPage, currentPage, pageNumbers, nPage }) => {

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className={styles.paginationBtn}>
      {currentPage !== 1 && <DashboardButton btnStyle={styles.pagination} value={"Prev"} onclick={prevPage} />}
      {pageNumbers.map((number, i) =>
        <div className={`${styles.pageNumbers} ${currentPage === number ? styles.active : ''}`} key={i}>
          <p>{number}</p>
        </div>
      )}
      {currentPage !== nPage && <DashboardButton btnStyle={styles.pagination} value={"Next"} onclick={nextPage} />}
    </div>
  )
}

export default Pagination
