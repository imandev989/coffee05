import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Sms from "./Sms";

const Login = ({ showRegisterForm }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

  const hideOtpForm = () => setIsLoginWithOtp(false);

  return (
    <>
      {!isLoginWithOtp ? (
        <>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Email/Phone"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <div className={styles.checkbox}>
              <input type="checkbox" name="" id="" />
              <p>Remember Me</p>
            </div>
            <button className={styles.btn}>ورود</button>
            <Link href={"/forget-password"} className={styles.forgot_pass}>
            Forgot Password?
            </Link>
            <button
              onClick={() => setIsLoginWithOtp(true)}
              className={styles.btn}
            >
                OTP Login
            </button>
            <span>Do you Have Account?</span>
            <button onClick={showRegisterForm} className={styles.btn_light}>
              Register
            </button>
          </div>
          <Link href={"/"} className={styles.redirect_to_home}>
            Cancel
          </Link>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Login;
