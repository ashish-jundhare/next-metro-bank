import styles from "../styles/MainNav.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import DashboarMenuModal from "./modals/DashboarMenuModal";
import { useRouter } from "next/router";

export default function MainNav() {
  const email = useSelector((state) => state.auth.isEmail);
  const userName = useSelector((state) => state.auth.user);

  const navigate = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <DashboarMenuModal />}

      <div className={styles.MainNav}>
        <nav className={styles.nav}>
          <div className={styles.leftLogos}>
            <div className={styles.MetroBankLogoimg}>
              <img
                src="../MetroBankLogo.svg"
                className={`${styles.nameLogo} ${styles.rlogo}`}
                alt="MetroBankLogo"
              />
            </div>
            <div className={`${styles.abcLogoimg}  ${styles.rlogo}`}>
              <img
                src="../abcLogo.svg"
                className={styles.abcLogo}
                alt="abcLogo"
              />
            </div>
          </div>
          <div className={styles.rightLogo}>
            <div className={styles.belliconimg}>
              <img
                src="../bellicon.svg"
                className={styles.bellicon}
                alt="Bellicon Logo"
              />
            </div>
            <div className={styles.signinimg}>
              <button
                className={styles.signInbtn}
                onClick={() => setModalOpen(!modalOpen)}
              >
                PT
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
