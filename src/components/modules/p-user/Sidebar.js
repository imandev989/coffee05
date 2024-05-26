"use client";

import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSms, MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import swal from "sweetalert";

const Sidebar = () => {
  const path = usePathname();

  const logoutHandler = () => {
    swal({
      title: "Support tickets",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((result) => {
      //code
    });
  };
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <p>Welcome Dear Iman</p>
      </div>
      <ul className={styles.sidebar_main}>
        {path.includes("/p-user") ? (
          <>
            <Link href={"/p-user"} className={styles.sidebar_link_active}>
              <ImReply />
              Dashboard
            </Link>
            <Link href={"/p-user/orders"}>
              <FaShoppingBag />
              Orders
            </Link>
            <Link href={"/p-user/tickets"}>
              <MdSms />
              Support tickets{" "}
            </Link>
            <Link href={"/p-user/comments"}>
              <FaComments />
              Comments{" "}
            </Link>
            <Link href={"/p-user/wishlist"}>
              <FaHeart />
              Favourites
            </Link>
            <Link href={"/p-user/account-details"}>
              <TbListDetails />
              Account Details
            </Link>
          </>
        ) : (
          <>
            <Link href={"/p-admin"} className={styles.sidebar_link_active}>
              <ImReply />
              Dashboard
            </Link>

            <Link href={"/p-admin/products"}>
              <FaShoppingBag />
              Products
            </Link>
            <Link href={"/p-admin/users"}>
              <FaUsers />
              Users
            </Link>
            <Link href={"/p-admin/comments"}>
              <FaComments />
              Comments{" "}
            </Link>

            <Link href={"/p-admin/tickets"}>
              <MdSms />
              Tickets{" "}
            </Link>
            <Link href={"/p-admin/discount"}>
              <MdOutlineAttachMoney />
              Settings
            </Link>
          </>
        )}
      </ul>
      <div className={styles.logout} onClick={logoutHandler}>
        <MdLogout />
        Exit
      </div>
    </aside>
  );
};

export default Sidebar;
