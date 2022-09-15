// import "./style/CurrentServCard.css";
import styles from "../styles/CurrentServCard.module.css";
import CurrentAcc from "../public/CurrentAcc.svg";
import Payroll from "../public/Payroll.svg";
import payments from "../public/payments.svg";
import { useDispatch, useSelector } from "react-redux";

export default function CurrentServCard() {
  const dispatch = useDispatch();
  // Yash's Feedback
  // remove unused code, vars, imports
  const services = useSelector((state) => state.auth.isServices);
  const cardDetails = [
    {
      img: CurrentAcc,
      title: "Current Account",
      rating: "3",
    },
    {
      img: Payroll,
      title: "Payroll",
      rating: "2",
    },
    {
      img: payments,
      title: "Payments",
      rating: null,
    },
  ];

  return (
    <>
      <div className={styles.Current_Service_Container}>
        {cardDetails.map((element) => (
          <div className={styles.currentServCard} key={element.title}>
            <img
              src={element.img}
              className={styles.cardImg}
              alt="Current Service Img"
            />
            <h3 className={styles.Service_Title}>{element.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
