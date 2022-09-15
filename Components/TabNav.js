import styles from "../styles/TabNav.module.css";
import { dashboardActions } from "../featurs/slicer/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function TabNav() {
  // Yash's Feedback
  // remove unused code
  const navigate = useRouter();
  const tabactive = useSelector((state) => state.summaryTabActive);
  const dispatch = useDispatch();
  const success = useSelector((state) => state.auth.isSuccess);
  const summarybtn = () => {
    dispatch(dashboardActions.setSummaryTab());
  };

  const Detailsbtn = () => {
    success
      ? dispatch(dashboardActions.setDetailsTab())
      : navigate.replace("/login");
  };

  return (
    <>
      <div className={styles.tabNav}>
        <button
          className={`${styles.summary} ${styles.btncc}`}
          onClick={summarybtn}
        >
          <strong>Summary</strong>
        </button>
        <button
          className={`${styles.details} ${styles.btncc}`}
          onClick={Detailsbtn}
        >
          <strong>Details</strong>
        </button>
      </div>
    </>
  );
}
