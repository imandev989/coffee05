import styles from "./topbar.module.css";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
const Topbar = () => {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.profile}>
          <div>
            <p>Iman Dev</p>
            <span>Super Admin</span>
          </div>
          <img src="/images/Iman.jpeg" alt="" />
        </div>
        <section>
          <div className={styles.searchBox}>
            <input type="text" style={{paddingLeft:"50px"}} placeholder="Search ..." />
            <div>
              <IoIosSearch />
            </div>
          </div>
          <div className={styles.notification}>
            <IoIosNotifications />
            <span>2</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Topbar;
