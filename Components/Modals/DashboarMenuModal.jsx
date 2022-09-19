import styles from "../../styles/DashboarMenuModal.module.css";
import React from 'react'
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../featurs/slicer/authSlice";

export default function DashboarMenuModal() {
    const success = useSelector((state) => state.auth.isSuccess);
    const navigate = useRouter();
    const dispatch = useDispatch();

    function handleEdit() {
        success ? (navigate.replace('/editprofile')) : (navigate.replace('/login'));
    }

    function handleLogout() {
        sessionStorage.removeItem("Authenticated");
        dispatch(authActions.setIsSuccess(false));
        navigate.replace('/login')
    }

    return (
        <div className={styles.container}>
            <div className={styles.intials_logo}>
                <button className={styles.initials_btn}>PT</button>
            </div>
            <div className={styles.username_modal}>
                <h1 className={styles.modal_h_username}>User Name</h1>
                <h3 className={styles.mail_modal}>userName@abc.com</h3>
            </div>
            <div className={styles.modal_btn_container}>
                <button onClick={handleEdit} className={styles.modal_btn}>
                    <h3>Edit Profile</h3>
                </button>
                <button className={styles.modal_btn}>
                    <h3>Settings</h3>
                </button >
                <button onClick={handleLogout} className={styles.modal_btn}>
                    <h3>Logout</h3>
                </button>
            </div>
        </div >
    )
}
