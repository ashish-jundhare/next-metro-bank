import styles from "../styles/DetailsTab.module.css";
import { MdOutlineCopyright } from "react-icons/md";
import TabNav from "./TabNav";

export default function DetailsTab() {
  const tableData = [
    {
      transactionId: "2011002039111",
      Date: "22/09/2021",
      Amount: "1,780",
      Status: "Approved",
      Actions: "Actions",
    },
    {
      transactionId: "2011002039112",
      Date: "19/09/2021",
      Amount: "1,890",
      Status: "Approved",
      Actions: "Actions",
    },
    {
      transactionId: "2011002039113",
      Date: "20/08/2021",
      Amount: "5,500",
      Status: "Rejected",
      Actions: "Actions",
    },
    {
      transactionId: "2011002039114",
      Date: "12/07/2021",
      Amount: "2,590",
      Status: "Approved",
      Actions: "Actions",
    },
    {
      transactionId: "2011002039115",
      Date: "08/07/2021",
      Amount: "2,800",
      Status: "Rejected",
      Actions: "Actions",
    },
  ];

  return (
    <div>
      {/* <div className={styles.Details_dashboard}> */}
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
          <div className={styles.table_body}>
            {tableData.map((item) => (
              <div className={styles.table_contents} key={item.transactionId}>
                <tr className={styles.trcc}>
                  <td className={styles.tdcc}>{item.transactionId}</td>
                  <td className={styles.tdcc}>{item.Date}</td>
                  <td className={styles.tdcc}>{item.Amount}</td>
                  <td className={styles.tdcc}>{item.Status}</td>
                  <td className={styles.tdcc}>{item.Actions}</td>
                </tr>
              </div>
            ))}
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
    </div>
  );
}
