import AccordionBox from "../../components/AccordionBox/AccordionBox";
import Button from "../../components/Button/Button";
import styles from "./FAQSection.module.scss";

const FAQSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Faq</p>
        <p className={styles.text}>
          If you don't see an answer to your question, you can send us an email
          from our contact form.
        </p>
        <p className={styles.info}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.
        </p>
        <Button text="All FAQ" />
      </div>
      <div>
        <AccordionBox />
      </div>
    </div>
  );
};

export default FAQSection;
