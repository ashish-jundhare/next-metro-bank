import styles from "../../styles/login.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../featurs/slicer/authSlice";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import Link from "next/link";

const intial = {
  userId: "",
  userPass: "",
};
export default function login() {
  const navigate = useRouter();
  const [filled, setFilled] = useState("");
  const dispatch = useDispatch();
  // const [data, setData] = useState(intial);
  const [userId, serUserId] = useState("");
  const [userPass, setuserPass] = useState("");

  const url = "http://localhost:3004/users";
  // Yash's Feedback
  // remove unused variables/ code
  const auth = useSelector((state) => state.auth);
  const success = useSelector((state) => state.auth.isSuccess);
  const error = useSelector((state) => state.auth.isError);
  function handleUsername(e) {
    serUserId(e.target.value);
  }

  function handlePass(e) {
    setuserPass(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(url)
      .then((response) => {
        response.data.map((item) => {
          if (item.email === userId && item.password === userPass) {
            console.log("Loged In");

            dispatch(authActions.setIsSuccess(true));
            dispatch(authActions.setIsUser(item.fullName));
            dispatch(authActions.setIsEmail(item.email));
            setTimeout(() => {
              navigate.replace("/dashboard");
            }, 2000);

            return;
          } else {
            console.log("Invalid credentials");
            dispatch(authActions.setIsError(true));
            dispatch(authActions.setIsMessage("Oops Something went Wrong!!"));
          }
        });
      })
      .catch((err) => {
        dispatch(authActions.setIsError(true));
        dispatch(authActions.setIsMessage(err));
      });
  };

  return (
    <div className={styles.MainContainer}>
      <div className={styles.leftContainer}></div>
      <div className={styles.rightContainer}>
        <div className={styles.rightInerContain}>
          {success ? <Alert severity="success">Login Succesfull</Alert> : null}
          {error ? <Alert severity="error">Invalid Credentials</Alert> : null}
          <form className={styles.form}>
            <h1>Login</h1>
            <h4 id={styles.subheading}>Please Login to your account</h4>
            <label className={styles.label}>
              <strong>Email or Phone</strong>
            </label>
            <input
              id={styles.input_field}
              type={"email"}
              // autoComplete="off"
              value={userId}
              name="userId"
              onChange={handleUsername}
            />
            <label className={styles.label}>
              <strong>Password </strong>
            </label>

            <div className={styles.passWordInput}>
              <div>
                <input
                  className={styles.login_input}
                  type={"password"}
                  name="password"
                  value={userPass}
                  // autoComplete="off"
                  onChange={handlePass}
                />
              </div>
              <div className={styles.eyeicons}>
                <AiFillEyeInvisible size={22} />
              </div>
            </div>

            <div className={styles.rightHeader}>
              <Link href={"/"}>
                <h3 className={styles.forget}>Forgot Password?</h3>
              </Link>
            </div>

            <button className={styles.subbtn} onClick={handleSubmit}>
              <strong> Login </strong>
            </button>

            <div className={styles.registration_link}>
              <h3 id={styles.anchor_label}>Don't have an account ? </h3>
              <Link href={"/registration"}>
                <a className={styles.anchor}>
                  <h3> Create an Account</h3>
                </a>
              </Link>

              {/* Yash's Feedback */}
              {/* remove textDecoration here, link must have a underline property */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
