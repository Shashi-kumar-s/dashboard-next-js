import styles from '@/app/ui/dashboard/rightbar/rightBar.module.css'
import { FaEye } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { MdOutlineLibraryBooks } from 'react-icons/md';

const RightBar = () => {
  return (
    <div className={styles.container} >
      <div className={styles.box1}>
        <h2 className={styles.title_1}><BsFire size={18} color='#d1231d' />Title 1</h2>
        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p className={styles.descr_1}>Ipsum Dolor Sit Amet</p>
        <p className={styles.descr_2}>Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum es simplemente el texto de relleno de las </p>
        <button className={styles.btn_1}><FaEye size={16}/>Watch Now</button>
      </div>
      <div className={styles.box1}>
        <h2 className={styles.title_1}><BsFire size={18} color='#d1231d' />Title 2</h2>
        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p className={styles.descr_1}>Ipsum Dolor Sit Amet</p>
        <p className={styles.descr_2}>Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum es simplemente el texto de relleno de las </p>
        <button className={styles.btn_1}><MdOutlineLibraryBooks />Learn Now</button>
      </div>
    </div>
  )
}

export default RightBar
