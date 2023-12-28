import styles from "@/app/ui/dashboard/product/product.module.css"
import DashboardButton from "@/app/ui/dashboard/button/Button"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import Search from "@/app/ui/dashboard/search/Search"
import Link from "next/link"


const productsDataTiltle = ["Title", "Description", "Created at", "Price", "Stock"]
const productDetails = [
  { id: "1", itemname: "iphone", description: "dahfkdh kjasdfhl jlaksjflka", date: "20 Nov 2022", price: "1.255", stock: "40" },
  { id: "2", itemname: "monitor", description: "abcd khkl kkjkjhk kjhkhknkj", date: "22 sep 2023", price: "2.100", stock: "10" },
]

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <Search placeholder="Search User" />
        </div>
        <Link href="/dashboard/products/addProduct">
          <DashboardButton btnStyle={styles.btn} value={"Add New"} />
        </Link>
      </div>
      <div className={styles.product_list}>
        <table className={styles.table}>
          <thead>
            <tr>
              {productsDataTiltle.map(ele => <td key={ele.id} className={styles.title}>{ele}</td>)}
            </tr>
          </thead>
          <tbody>
            {productDetails.map((ele) => {
              return (
                <>
                  <tr key={ele.id}>
                    <td className={styles.itemname}>{ele.itemname}</td>
                    <td className={styles.description}>{ele.description}</td>
                    <td className={styles.date}>{ele.date}</td>
                    <td>$ {ele.price}</td>
                    <td>{ele.stock} pcs</td>
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

export default Products
