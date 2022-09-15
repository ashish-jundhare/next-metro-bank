import MainNav from "../../../Components/MainNav";
import styles from "../../../styles/editprofile.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function editprofile() {
  //   const state = {
  //     img: previewImg,
  //   };

  return (
    <div className={styles.editProfie}>
      <div className={styles.heading}>
        <h2> Edit Profile</h2>
      </div>
      <div className={styles.editProfile_dashboard}>
        <form className={styles.profile_form}>
          <div className={styles.container}>
            <div className={styles.img_preview}>
              <img
                src="/previewImg"
                className={styles.previewimg}
                alt="userImage"
              />
              {/* Yash's Feedback */}
              {/* choose a different alt prop value */}
            </div>
            <div className={styles.input_img}>
              <input
                type={"image"}
                className={styles.imginput}
                name="image"
                accept=""
                alt="Img notAvailable"
              />
              {/* Yash's Feedback */}
              {/* add alt prop, check html docs MDN */}
            </div>
          </div>
          <label className={styles.profile_label}>
            <strong>Company Name </strong>
          </label>
          <input
            className={styles.profile_input}
            type={"text"}
            autoComplete="off"
          />
          <label className={styles.profile_label}>
            <strong>Email Address </strong>
          </label>
          <input
            className={styles.profile_input}
            type={"email"}
            autoComplete="off"
          />
          <label className={styles.profile_label}>
            <strong>Old Password </strong>
          </label>
          <div className={styles.passWordInput}>
            <div>
              <input
                type={"password"}
                className={styles.profile_input}
                autoComplete="off"
              />
            </div>
            <div className={styles.eyeicons}>
              <AiFillEyeInvisible size={22} />
            </div>
          </div>
          <label className={styles.profile_label}>
            <strong>New Password </strong>
          </label>
          <div className={styles.passWordInput}>
            <div>
              <input
                type={"password"}
                className={styles.profile_input}
                autoComplete="off"
              />
            </div>
            <div className={styles.eyeicons}>
              <AiFillEyeInvisible size={22} />
            </div>
          </div>
          <label className={styles.profile_label}>
            <strong>Confirm Password </strong>
          </label>
          <div className={styles.passWordInput}>
            <div>
              <input
                type={"password"}
                className={styles.profile_input}
                autoComplete="off"
              />
            </div>
            <div className={styles.eyeicons}>
              <AiFillEyeInvisible size={22} />
            </div>
          </div>

          <button type="submit" className={styles.profileBtn}>
            <strong>Update</strong>
          </button>
        </form>
      </div>
    </div>
  );
}
