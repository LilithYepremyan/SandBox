import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Wave from "../../components/Wave/Wave";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import styles from "./ServicesSection.module.scss";

type dataType = {
  id: number;
  title: string;
  photo: string;
  info: string;
};

const data: dataType[] = [
  {
    id: 1,
    title: "Web Design",
    photo: service1,
    info: "Nulla vitae elit libero, a pharetra augue.Donec id elit non mi porta gravida at eget.Fusce dapibus tellus.",
  },
  {
    id: 2,
    title: "Graphic Design",
    photo: service2,
    info: "Maecenas faucibus mollis interdum.Vivamus sagittis lacus vel augue laoreet.Sed posuere consectetur.",
  },
  {
    id: 3,
    title: "3D Animation",
    photo: service3,
    info: "Cras justo odio, dapibus ac facilisis in,egestas eget quam. Praesent commodocursus magna scelerisque.",
  },
];

const ServicesSection = () => {
  return (
    <>
      <Wave color="#F0F8FE" />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.title}>What we do?</p>
          <h2 className={styles.text}>
            The service we offer is specifically designed to meet your needs.
          </h2>
        </div>
        <div className={styles.cardsContainer}>
          {data.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              photo={item.photo}
              info={item.info}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
