import styles from "./sms.module.css";

const Sms = ({ hideOtpForm }) => {
  return (
    <>
      <div className={styles.form}>
        <p>Verfication Code </p>
        <span className={styles.code_title}>
          Please type the verification code sent
        </span>
        <span className={styles.number}>09921558293</span>
        <input className={styles.input} type="text" />
        <button style={{ marginTop: "1rem" }} className={styles.btn}>
          Register the verification code{" "}
        </button>
        <p className={styles.send_again_code}>Resend the one-time use code</p>
      </div>
      <p onClick={hideOtpForm} className={styles.redirect_to_home}>
        Cancel
      </p>
    </>
  );
};

export default Sms;
