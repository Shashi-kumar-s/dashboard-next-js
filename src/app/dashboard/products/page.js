"use client"
import styles from "@/app/ui/dashboard/product/product.module.css"
import DashboardButton from "@/app/ui/dashboard/button/Button"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import Search from "@/app/ui/dashboard/search/Search"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"


const productsDataTiltle = ["Title", "Description", "Price", "Stock"]
const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const records = data.slice(firstIndex, firstIndex + recordsPerPage);
  const nPage = Math.ceil((data && data.length) / recordsPerPage);
  const pageNumbers = [...Array(nPage).keys()].map((num) => num + 1);
  const [result, setResult] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getAllProduct`);
      setData(response.data.data)
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const deleteProductData = async (id) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/deleteProductById/${id}`);
      fetchData()
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])


  const handleDelete = (id) => {
    deleteProductData(id)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterData = () => {
    return records.filter((ele) => ele.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  useEffect(() => {
    if (searchQuery.length >= 2) {
      setResult(filterData())
    } else { setResult(records) }
  }, [searchQuery, data, currentPage])


  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <Search placeholder="Search User" value={searchQuery} onchange={handleSearch} />
          </div>
          <Link href="/dashboard/products/addProduct">
            <DashboardButton btnStyle={styles.btn} value={"Add New"} />
          </Link>
        </div>
        {data.length > 0 && <div className={styles.product_list}>
          <table className={styles.table}>
            <thead>
              <tr>
                {productsDataTiltle.map(ele => <td key={ele} className={styles.title}>{ele}</td>)}
              </tr>
            </thead>
            <tbody>
              {result.map((ele) => {
                return (
                  <tr key={ele._id}>
                    <td className={styles.itemname}>{ele.name}</td>
                    <td className={styles.description}>{ele.description}</td>
                    <td>$ {ele.price}</td>
                    <td>{ele.stock} pcs</td>
                    <td><Link href={`/dashboard/products/${ele._id}`}><DashboardButton btnStyle={styles.view} value={"view"} /></Link></td>
                    <td><DashboardButton btnStyle={styles.delete} value={"Delete"} onclick={() => handleDelete(ele._id)} /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} nPage={nPage} />
        </div>}
      </div >
    </>
  )
}

export default Products
