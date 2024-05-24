import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Sms from "./Sms";
import { showSwal } from "@/utils/helpers";
import { valiadteEmail, valiadtePassword } from "@/utils/auth";

const Login = ({ showRegisterForm }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  const hideOtpForm = () => setIsLoginWithOtp(false);

  const loginWithPassword = async () => {
    console.log(phoneOrEmail);
    if (!phoneOrEmail) {
      return showSwal("Please enter a contact number or email", "error", "OK");
    }

    const isValidEmail = valiadteEmail(phoneOrEmail);
    if (!isValidEmail) {
      return showSwal("The email entered is not valid", "error", "Retry");
    }

    if (!password) {
      return showSwal("Enter the password", "error", "Retry");
    }

    const isValidPassword = valiadtePassword(password);
    if (!isValidPassword) {
      return showSwal("The password is not strong enough", "error", "Retry");
    }

    const user = { email: phoneOrEmail, password };

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    console.log("Res ->", res);
    if (res.status === 200) {
      showSwal("Login Successfull", "success", "Login To Your Panel");
    } else if (res.status === 422 || res.status === 401) {
      showSwal("No user found with this information", "error", "Retry");
    } else if (res.status === 419) {
      showSwal("Email or password is not correct", "error", "Retry");
    }
  };

  return (
    <>
      {!isLoginWithOtp ? (
        <>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              value={phoneOrEmail}
              onChange={(event) => setPhoneOrEmail(event.target.value)}
              placeholder="Phone/Email"
            />
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <div className={styles.checkbox}>
              <input type="checkbox" name="" id="" />
              <p>Remember Me</p>
            </div>
            <button className={styles.btn} onClick={loginWithPassword}>
              ورود
            </button>
            <Link href={"/forget-password"} className={styles.forgot_pass}>
              Forgot your password?
            </Link>
            <button
              onClick={() => setIsLoginWithOtp(true)}
              className={styles.btn}
            >
              Log in with a one-time code
            </button>
            <span>Do you not have an account?</span>
            <button onClick={showRegisterForm} className={styles.btn_light}>
              Register{" "}
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
