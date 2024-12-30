import Button from "../../components/Button/Button";
import photo from "../../assets/images/startSection.png";
import company1 from "../../assets/images/company1.png";
import company2 from "../../assets/images/company2.png";
import company3 from "../../assets/images/company3.png";
import company4 from "../../assets/images/company4.png";
import company5 from "../../assets/images/company5.png";
import company6 from "../../assets/images/company6.png";
import company7 from "../../assets/images/company7.png";
import styles from "./StartSection.module.scss";

const items = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
];

const StartSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            A digital agency specializing on
            <span className={styles.span}> mobile design</span>
          </h2>
          <p className={styles.text}>
            We are an award winning design agency that strongly believes in the
            power of creative ideas.
          </p>
          <Button text="Get Started" />
        </div>
        <div>
          <img src={photo} alt="img" />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <p>Trusted by over 2K+ clients across the world</p>
        <div className={styles.imgWrapper}>
          {items.map((item) => (
            <img key={item} className={styles.img} src={item} alt="img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartSection;
