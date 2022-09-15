import MainNav from "../../Components/MainNav";
import styles from "../../styles/dashboard.module.css";
import CurrentServices from "../../Components/CurrentServices";
import ActiveServices from "../../Components/ActiveServices";
import SummaryTab from "../../Components/SummaryTab";
import { MdOutlineCopyright } from "react-icons/md";
import TabNav from "../../Components/TabNav";
import { useSelector } from "react-redux";
import DetailsTab from "../../Components/DetailsTab";
import { authActions } from "../../featurs/slicer/authSlice";
// Yash's Feedback
// leave one line after imports
// remove unused code and variables
export default function dashboard() {
  const success = useSelector((state) => state.auth.isSuccess);
  const toggle = useSelector((state) => state.dashboardToggle.detailsTabActive);

  return (
    <div className={styles.body}>
      <div className={styles.MainNav}>
        <MainNav />
      </div>
      <div className={styles.dashboardHeader}>
        <h2>Dashboard</h2>
      </div>
      <div className={styles.tabNav}>
        <TabNav />
      </div>
      {toggle ? (
        <DetailsTab />
      ) : (
        <div className={styles.mainDashboard}>
          <div className={styles.SummaryTab}>
            <SummaryTab />
          </div>
          <div className={styles.serviceHeader}>
            <strong className={styles.mainHeader}> Services</strong>
            <span className={styles.subHeader}>
              <i>Micro bank services for you</i>
            </span>
          </div>
          <div className={styles.currentServices}>
            <CurrentServices />
          </div>
          <div className={styles.active_services}>
            {/* Yash's Feedback */}
            {/* remove inline styling and add it in css file */}
            <h2 className={styles.active_servH}>Active Services</h2>
            <ActiveServices />
          </div>
          <div className={styles.footer}>
            <label className={styles.footer_label}>
              <span className={styles.svg}>
                <MdOutlineCopyright />
              </span>
              <strong>2021 Micro Bank</strong>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
