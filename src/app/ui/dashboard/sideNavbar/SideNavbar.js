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
        path: "/users",
        icon: <FaUser />
      },
      {
        title: "Products",
        path: "/products",
        icon: <MdOutlineProductionQuantityLimits />
      },
      {
        title: "Transactions",
        path: "/transactions",
        icon: <GrTransaction />
      },
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/revenue",
        icon: <BsReverseLayoutTextSidebarReverse />
      },
      {
        title: "Reports",
        path: "/reports",
        icon: <TbReport />
      },
      {
        title: "Teams",
        path: "/teams",
        icon: <PiUsersFourFill />
      },
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/settings",
        icon: <IoMdSettings />
      },
      {
        title: "Help",
        path: "/help",
        icon: <IoMdHelpCircle />
      },
      {
        title: "Logout",
        path: "/logout",
        icon: <IoMdLogOut />
      },
    ]
  },
]

const SideNavbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navlist}>
        {sideMenu.map(cate =>
          <li key={cate.title}>
            <span> {cate.title}</span>
            {cate.list.map(ele => <MenuLink ele={ele} />)}
          </li>
        )}
      </ul>
    </div>
  )
}

export default SideNavbar
