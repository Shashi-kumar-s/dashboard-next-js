import styles from "@/app/ui/dashboard/search/search.module.css"
import { MdSearch } from "react-icons/md"

const Search = ({ placeholder, onchange, value }) => {
  return (
    <div className={styles.search}>
      <MdSearch />
      <input placeholder={placeholder} className={styles.input} onChange={onchange} value={value} />
    </div>
  )
}

export default Search
