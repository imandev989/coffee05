import { useState } from "react";
import styles from "./register.module.css";
import Sms from "./Sms";
import swal from "sweetalert";
import { showSwal } from "@//utils/helpers";
import { valiadteEmail, valiadtePassword, valiadtePhone } from "@/utils/auth";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideOtpForm = () => setIsRegisterWithOtp(false);

  const signUp = async () => {
    if (!name.trim()) {
      return showSwal("Please Enter Valid Name?", "error", "Retry");
    }

    const isValidPhone = valiadtePhone(phone);
    if (!isValidPhone) {
      return showSwal("Your Phone Number is not valid!", "error", " Retry ");
    }

    if (email) {
      const isValidEmail = valiadteEmail(email);
      if (!isValidEmail) {
        return showSwal("  Your Email is not valid!  ", "error", "Retry ");
      }
    }

    const isValidPassword = valiadtePassword(password);
    if (!isValidPassword) {
      return showSwal(" Your Password is not valid    ", "error", " Retry ");
    }

    const user = { name, phone, email, password };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      showSwal("Register Successful", "success", "Login to User Panel");
    } else if (res.status === 422) {
      showSwal(
        "A user with this information already exists",
        "error",
        " Retry"
      );
    }
  };

  return (
    <>
      {!isRegisterWithOtp ? (
        <>
          <div className={styles.form}>
            <input
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Name"
            />
            <input
              className={styles.input}
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder=" Phone Number  "
            />
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder=" Email (Optional)"
            />

            {isRegisterWithPass && (
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder=" Password"
              />
            )}

            <p
              style={{ marginTop: "1rem" }}
              className={styles.btn}
              onClick={() => setIsRegisterWithOtp(true)}
            >
              Register with confirmation code
            </p>

            <button
              style={{ marginTop: ".7rem" }}
              onClick={() => {
                if (isRegisterWithPass) {
                  signUp();
                } else {
                  setIsRegisterWithPass(true);
                }
              }}
              className={styles.btn}
            >
              Register with a password
            </button>
            <p onClick={showloginForm} className={styles.back_to_login}>
              Back to login{" "}
            </p>
          </div>
          <p className={styles.redirect_to_home}>Cancel</p>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Register;
