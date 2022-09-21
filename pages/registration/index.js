import styles from "../../styles/registration.module.css";
import { useState } from "react";
import axios from "axios";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

export default function registration() {
  const navigate = useRouter();

  const handleHaveanAcc = () => {
    navigate.replace("/login");
  };

  const url = "http://localhost:3004/users";
  const initialstate = {
    fullName: "",
    date: "",
    email: "",
    password: "",
  };

  const [userRegistration, setUserRegistration] = useState(initialstate);

  let name, value;
  const handleChangeFormData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handlerbtn = (e) => {
    e.preventDefault();

    axios
      .post(url, {
        fullName: userRegistration.fullName,
        date: userRegistration.date,
        email: userRegistration.email,
        password: userRegistration.password,
      })
      .then((res) => {})
      .catch((err) => {})
      .finally(setUserRegistration(initialstate));
  };

  return (
    <div className={styles.Registration_m}>
      <div className={styles.registerMain}></div>
      <div className={styles.createAcc}>
        <div className={styles.createAccInside}>
          <form action="" onSubmit={handlerbtn} className={styles.form}>
            <h1 id={styles.header}>Create an Account</h1>
            <label className={styles.label}>
              <strong>Full Name</strong>
            </label>
            <input
              type={"text"}
              value={userRegistration.fullName}
              className={styles.inbox_registration}
              name="fullName"
              onChange={handleChangeFormData}
            />
            <label className={styles.label}>
              <strong>Date of Incorporation</strong>
            </label>
            <input
              type={"date"}
              value={userRegistration.date}
              className={styles.inbox_registration}
              name="date"
              onChange={handleChangeFormData}
            />
            <label className={styles.label}>
              <strong>Email</strong>
            </label>
            <input
              type={"email"}
              value={userRegistration.email}
              className={styles.inbox_registration}
              name="email"
              autoComplete="off"
              onChange={handleChangeFormData}
            />
            <label className={styles.label}>
              <strong>Password</strong>
            </label>
            <div className={styles.passWordInput}>
              <div>
                <input
                  type={"password"}
                  className={styles.inbox_registration}
                  name="password"
                  value={userRegistration.password}
                  autoComplete="off"
                  onChange={handleChangeFormData}
                />
              </div>
              <div className={styles.eyeicon}>
                <AiFillEyeInvisible size={22} />
              </div>
            </div>
            <label className={styles.label}>
              <strong>Confirm Password</strong>
            </label>
            <div className={styles.passWordInput}>
              <div>
                <input
                  type={"password"}
                  className={styles.inbox_registration}
                  name="confirmPassword"
                  value={userRegistration.confirmPassword}
                  autoComplete="off"
                  onChange={handleChangeFormData}
                />
              </div>
              <div className={styles.eyeicon}>
                <AiFillEyeInvisible size={22} />
              </div>
            </div>
            <button type="submit" className={styles.createAccbtn}>
              Create An Account
            </button>
            {/* Yash's Feedback */}
            {/* remove inline style, use css files */}
            <div className={styles.label_login}>
              <h3>Already have an account ?</h3>
              <h3 className={styles.navigate_login}>
                <Link href={"/login"}>
                  <a>Login </a>
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
