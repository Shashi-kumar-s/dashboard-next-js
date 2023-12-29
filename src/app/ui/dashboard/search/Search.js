import styles from "@/app/ui/dashboard/search/search.module.css"
import { MdSearch } from "react-icons/md"

const Search = ({placeholder}) => {
  return (
    <div className={styles.search}>
       <MdSearch/>
       <input placeholder={placeholder} className={styles.input}/>
    </div>
  )
}

export default Search
