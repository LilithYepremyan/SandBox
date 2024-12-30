import styles from "./ProductCard.module.scss";

type Props = {
  number: string;
  title: string;
  info: string;
};
const ProductCard: React.FC<Props> = ({ number, title, info }) => {
  return (
    <div className={styles.card}>
      <div className={styles.circle}>
        <span className={styles.count}>{number}</span>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{info}</p>
      </div>
    </div>
  );
};

export default ProductCard;
