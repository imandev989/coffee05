"use client";
import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSms, MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import swal from "sweetalert";

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();
  const logoutHandler = () => {
    swal({
      title: "Support tickets",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then(async (result) => {
      //code
      if (result) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });
        if (res.status === 200) {
          swal({
            title: "You Logout Successfully",
            icon: "success",
            buttons: "OK",
          }).then((result) => {
            // location.replace("/");
            router.replace("/");
          });
        }
      }
    });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <p>Your Welcome Dear Iman</p>
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
              Support Tickets
            </Link>
            <Link href={"/p-user/comments"}>
              <FaComments />
              Comments
            </Link>
            <Link href={"/p-user/wishlist"}>
              <FaHeart />
              Favourite
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
              Comments
            </Link>

            <Link href={"/p-admin/tickets"}>
              <MdSms />
              Tickets
            </Link>
            <Link href={"/p-admin/discount"}>
              <MdOutlineAttachMoney />
              Discounts
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
