import Button from "../../components/Button/Button";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./StrategySection.module.scss";

type dataType = {
  id: string;
  title: string;
  info: string;
};

const data: dataType[] = [
  {
    id: "01",
    title: "Collect Ideas",
    info: "Nulla vitae elit libero pharetra augue dapibus.",
  },
  {
    id: "02",
    title: "Data Analysis",
    info: "Vivamus sagittis lacus vel augue laoreet.",
  },
  {
    id: "03",
    title: "Finalize Product",
    info: "Cras mattis consectetur purus sit amet.",
  },
];

const StrategySection = () => {
  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.title}>Our strategy</p>
          <h2>Here are 3 working steps to organize our projects.</h2>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis.
          </p>
          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>
          <Button text="Learn More" />
        </div>
        <div className={styles.cardsContainer}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              number={item.id}
              title={item.title}
              info={item.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategySection;
