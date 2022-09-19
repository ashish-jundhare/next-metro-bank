import styles from "../styles/SummaryTab.module.css";

export default function SummaryTab() {
  return (
    <div className={styles.summary_main}>
      <div className={styles.summaryHeading}>
        <h2>Summary</h2>
        <div className={styles.SummaryTab_container}>
          <div className={styles.contains}>
            <label className={styles.labelcc}>
              <strong>Account Number</strong>
            </label>
            <h2 className={styles.values}>67238744</h2>
          </div>
          <div className={styles.contains}>
            <label className={styles.labelcc}>
              <strong>Income</strong>
            </label>
            <h2 className={styles.values}>$20,00,000</h2>
          </div>
          <div className={styles.contains}>
            <label className={styles.labelcc}>
              <strong>Spends</strong>
            </label>
            <h2 className={styles.values}>$11,00,000</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
