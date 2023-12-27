import styles from "@/app/ui/dashboard/sideNavbar/sideNavbar.module.css"
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { PiUsersFourFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa";
import MenuLink from "./menuLink/MenuLink";

const sideMenu = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUser />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdOutlineProductionQuantityLimits />
      },
      {
        title: "Transactions",
        path: "/dashboard/transaction",
        icon: <GrTransaction />
      },
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <BsReverseLayoutTextSidebarReverse />
      },
      {
        title: "Reports",
        path: "/dashboard/report",
        icon: <TbReport />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <PiUsersFourFill />
      },
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <IoMdSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <IoMdHelpCircle />
      },
      {
        title: "Logout",
        path: "/dashboard/logout",
        icon: <IoMdLogOut />
      },
    ]
  },
]

const SideNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user_details}>
        <FaUserCircle size={28} />
        <p>User 1</p>
      </div>
      <ul className={styles.navlist}>
        {sideMenu.map(cate =>
          <li key={cate.title}>
            <span className={styles.title}> {cate.title}</span>
            {cate.list.map(ele => <MenuLink ele={ele} />)}
          </li>
        )}
      </ul>
    </div>
  )
}

export default SideNavbar
