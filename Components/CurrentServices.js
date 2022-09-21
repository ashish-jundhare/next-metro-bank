import CurrentServCard from "./CurrentServCard";
import styles from "../styles/CurrentServices.module.css";

export default function CurrentServices() {
  return (
    <>
      {/* Yash's Feedback */}
      {/* remove inline styling, add to css file */}
      <h2 className={styles.current_servH}>Current Services</h2>
      <div>
        <CurrentServCard />
      </div>
    </>
  );
}
