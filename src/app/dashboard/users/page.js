"use client"
import styles from "@/app/ui/dashboard/user/user.module.css"
import DashboardButton from "@/app/ui/dashboard/button/Button"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import Search from "@/app/ui/dashboard/search/Search"
import { FaUserCircle } from "react-icons/fa"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"


const userDetailDataTiltle = ["Name", "Email", "Role", "Action"]

const Users = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Array.isArray(data) ? data.slice(firstIndex, lastIndex) : [];
  const nPage = Math.max(1, Math.ceil((data && data.length) / recordsPerPage));
  const pageNumbers = Array.from({ length: nPage }, (_, index) => index + 1);


  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getAllUser`);
      setData(response.data.data)
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const deleteUserData = async (id) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/deleteUserById/${id}`);
      fetchData()
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  useEffect(() => { 
    fetchData()
  }, [])

  const handleDelete = (id) => {
    deleteUserData(id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <Search placeholder="Search User" />
        </div>
        <Link href={"/dashboard/users/add"}>
          <DashboardButton btnStyle={styles.btn} value={"Add New"} />
        </Link>
      </div>
      {data.length > 0 && <div className={styles.user_list}>
        <table className={styles.table}>
          <thead>
            <tr>
              {userDetailDataTiltle.map(ele => <td key={ele} className={styles.title}>{ele}</td>)}
            </tr>
          </thead>
          <tbody>
            {records.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td className={styles.user}><FaUserCircle size={24} />{ele.name}</td>
                  <td className={styles.email}>{ele.email}</td>
                  <td>{ele.IsAdmin ? "Admin" : "Client"}</td>
                  <td>{ele.IsActive ? "Active" : "Passive"}</td>
                  <td><Link href={`/dashboard/users/${ele._id}`}><DashboardButton btnStyle={styles.view} value={"view"}/></Link></td>
                  <td><DashboardButton btnStyle={styles.delete} value={"Delete"} onclick={() => handleDelete(ele._id)} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} nPage={nPage} />
      </div>}
    </div>
  )
}

export default Users
