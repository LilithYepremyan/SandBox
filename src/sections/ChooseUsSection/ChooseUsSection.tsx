import Accordion from "../../components/Accordion/Accordion";
import photo from "../../assets/images/chooseUs.png";
import styles from "./ChooseUsSection.module.scss";

const ChooseUsSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.photo} src={photo} alt="img" />
      </div>
      <div>
        <div className={styles.textContainer}>
          <p className={styles.title}>Why choose us?</p>
          <h2>We bring solutions to make life easier.</h2>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
