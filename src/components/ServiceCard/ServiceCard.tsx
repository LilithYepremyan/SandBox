import styles from "./ServiceCard.module.scss";

type Props = {
  photo: string;
  title: string;
  info: string;
};

const ServiceCard: React.FC<Props> = ({ photo, title, info }) => {
  return (
    <div className={styles.serviceCard}>
      <img className={styles.photo} src={photo} alt="img" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.info}>{info}</p>
      <button className={styles.button}>Learn More &#8594;</button>
    </div>
  );
};

export default ServiceCard;
