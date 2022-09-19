import styles from "../styles/ActiveServices.module.css";
import wallet from "../public/wallet.svg";
import Investment from "../public/Investment.svg";
import TaxPayment from "../public/TaxPayment.svg";
import Loans from "../public/Loans.svg";

export default function ActiveServices() {
  const cardDetails = [
    {
      img: wallet,
      title: "Wallet",
    },
    {
      img: Investment,
      title: "Investment",
    },
    {
      img: TaxPayment,
      title: "Tax Payment",
    },
    {
      img: Loans,
      title: "Loans",
    },
  ];

  return (
    <>
      <div className={styles.Active_services_card}>
        {cardDetails.map((element) => (
          <div className={styles.card} key={element.title}>
            <img
              src={element.img}
              className={styles.cardImg}
              alt="Active Service Logo:p"
            />
            <h3>{element.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
