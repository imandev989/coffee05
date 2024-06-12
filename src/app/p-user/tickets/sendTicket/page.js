import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

const page = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.title}>
          <span>Send New Ticket</span>
          <Link href="/p-user/tickets"> All Tickets</Link>
        </h1>

        <div className={styles.content}>
          <div className={styles.group}>
            <label>Select Department:</label>
            <select>
              <option>Please Select On Item</option>

              <option value={"Department"}>Department</option>
            </select>
          </div>
          <div className={styles.group}>
            <label>Select Type Of Ticket:</label>
            <select>
              <option>Please Select On Item</option>

              <option value={"Support"}>Support </option>
            </select>
          </div>
          <div className={styles.group}>
            <label>Select Subject Of Ticket</label>
            <input placeholder="Type1..." type="text" />
          </div>
          <div className={styles.group}>
            <label>Plese Select Priority Level</label>
            <select>
              <option>Please Select On Item</option>
              <option value="3">Low</option>
              <option value="2">Mid</option>
              <option value="1">High</option>
            </select>
          </div>
        </div>
        <div className={styles.group}>
          <label>Please Enter Content of Ticket</label>
          <textarea rows={10}></textarea>
        </div>
        <div className={styles.uploader}>
          <span>Maximum Size: 6 MegaByte</span>
          <span>Allow Formats: jpg, png.jpeg, rar, zip</span>
          <input type="file" />
        </div>

        <button className={styles.btn}>
          <IoIosSend />
          Send Ticket
        </button>
      </main>
    </Layout>
  );
};

export default page;
