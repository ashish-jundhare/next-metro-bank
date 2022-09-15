import styles from "../styles/DetailsTab.module.css";
import { MdOutlineCopyright } from "react-icons/md";
import TabNav from "./TabNav";

export default function DetailsTab() {
  // Yash's Feedback
  // remove unused code, variables, imports

  return (
    <div>
      {/* <div className={styles.Details_dashboard}> */}
      <TabNav />
      <div className={styles.Details_table}>
        <table className={styles.talblecc}>
          <div className={styles.table_header}>
            <tr className={styles.trcc}>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </div>

          <div className={styles.table_contents}>
            <tr className={styles.trcc}>
              <td className={styles.tdcc}>2011002039111</td>
              <td className={styles.tdcc}>22/09/2021</td>
              <td className={styles.tdcc}>1,780</td>
              <td className={styles.tdcc}>Approved</td>
              <td className={styles.tdcc}>Actions</td>
            </tr>

            <tr className={styles.trcc}>
              <td className={styles.tdcc}>2011002039112</td>
              <td className={styles.tdcc}>19/09/2021</td>
              <td className={styles.tdcc}>1,890</td>
              <td className={styles.tdcc}>Approved</td>
              <td className={styles.tdcc}>Actions</td>
            </tr>
            <tr className={styles.trcc}>
              <td className={styles.tdcc}>2011002039113</td>
              <td className={styles.tdcc}>20/08/2021</td>
              <td className={styles.tdcc}>5,500</td>
              <td className={styles.tdcc}>Rejected</td>
              <td className={styles.tdcc}>Actions</td>
            </tr>
            <tr className={styles.trcc}>
              <td className={styles.tdcc}>2011002039114</td>
              <td className={styles.tdcc}>12/07/2021</td>
              <td className={styles.tdcc}>2,590</td>
              <td className={styles.tdcc}>Approved</td>
              <td className={styles.tdcc}>Actions</td>
            </tr>
            <tr className={styles.trcc}>
              <td className={styles.tdcc}>2011002039115</td>
              <td className={styles.tdcc}>08/07/2021</td>
              <td className={styles.tdcc}>2,800</td>
              <td className={styles.tdcc}>Rejected</td>
              <td className={styles.tdcc}>Actions</td>
            </tr>
          </div>
        </table>
      </div>
      <div className={styles.footer_detailsTab}>
        <label className={styles.footercc}>
          <span className={styles.svg}>
            <MdOutlineCopyright />
          </span>
          <strong>2021 Micro Bank</strong>
        </label>
      </div>
      {/* </div> */}
    </div>
  );
}
