import styles from "@/app/ui/dashboard/user/user.module.css"
import DashboardButton from "@/app/ui/dashboard/button/Button"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import Search from "@/app/ui/dashboard/search/Search"
import { FaUserCircle } from "react-icons/fa"


const userDetailDataTiltle = ["Name", "Email", "Created at", "Role", "Action"]
const userDetails = [
  { id: "1", username: "xyzvjs", email: "xyzvjs@gmail.com", date: "20 Nov 2022", userRole: "client", action: "passive" },
  { id: "2", username: "abcdef", email: "abcdef@gmail.com", date: "22 sep 2023", userRole: "client", action: "active" },
  { id: "3", username: "dsagdf", email: "dsagdf@gmail.com", date: "10 Nov 2022", userRole: "client", action: "active" },
  { id: "4", username: "lzvjs", email: "lzvjs@gmail.com", date: "09 Dec 2022", userRole: "client", action: "passive" },
]


const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <Search placeholder="Search User" />
        </div>
        <div>
          <DashboardButton btnStyle={styles.btn} value={"Add New"} />
        </div>
      </div>
      <div className={styles.user_list}>
        <table className={styles.table}>
          <thead>
            <tr>
              {userDetailDataTiltle.map(ele => <td key={ele.id} className={styles.title}>{ele}</td>)}
            </tr>
          </thead>
          <tbody>
            {userDetails.map((ele) => {
              return (
                <>
                  <tr key={ele.id}>
                    <td className={styles.user}><FaUserCircle size={24} />{ele.username}</td>
                    <td className={styles.email}>{ele.email}</td>
                    <td className={styles.date}>{ele.date}</td>
                    <td>{ele.userRole}</td>
                    <td>{ele.action}</td>
                    <td><DashboardButton btnStyle={styles.view} value={"view"} /></td>
                    <td><DashboardButton btnStyle={styles.delete} value={"Delete"} /></td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  )
}

export default Users
