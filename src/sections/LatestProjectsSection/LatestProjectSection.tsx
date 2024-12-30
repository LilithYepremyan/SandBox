import Slider from "../../components/Slider/Slider";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import styles from "./LatestProjectSection.module.scss";

const slides = [
  {
    image: slide1,
    title: "Cras Fermentum Sem",
    category: "Mobile Design",
  },
  {
    image: slide2,
    title: "Venenatis Euismod Vehicula",
    category: "Web Design",
  },
  {
    image: slide3,
    title: "Tortor Tellus Cursus",
    category: "Stationary",
  },
];

const LatestProjectSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Latest Projects</p>
      <h2 className={styles.text}>
        Check out some of our awesome projects with creative ideas and great
        design.
      </h2>
      <Slider slides={slides} />
    </div>
  );
};

export default LatestProjectSection;
