import ReviewCard from "../../components/ReviewCard/ReviewCard";
import styles from "./HappyCustomersSection.module.scss";
import avatar1 from "../../assets/images/avatar1.jpg";
import avatar2 from "../../assets/images/avatar2.jpg";
import avatar3 from "../../assets/images/avatar3.jpg";
import avatar4 from "../../assets/images/avatar4.jpg";

const reviews = [
  {
    reviewText:
      "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
    reviewer: "Coriss Ambady",
    reviewerPhoto: avatar1,
    reviewerInfo: "Financial Analyst",
  },
  {
    reviewText:
      "“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”",

    reviewer: "Cory Zamora",
    reviewerPhoto: avatar2,
    reviewerInfo: "Marketing Specialist",
  },
  {
    reviewText:
      "“Curabitur blandit tempus porttitor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam  quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.”",

    reviewer: "Nikolas Brooten",
    reviewerPhoto: avatar3,
    reviewerInfo: "Sales Manager",
  },
  {
    reviewText:
      "“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mauris. Donec non dolor ac elit aliquam",
    reviewer: "John Ambady",
    reviewerPhoto: avatar4,
    reviewerInfo: "Financial Analyst",
  },
  {
    reviewText:
      "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
    reviewer: "Lauren Widerski",
    reviewerPhoto: avatar3,
    reviewerInfo: "Sales Specialist",
  },
  {
    reviewText:
      "“Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero.”",
    reviewer: "Jackie Sanders",
    reviewerPhoto: avatar1,
    reviewerInfo: "Investment Planner",
  },
];

const HappyCustomersSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Happy customers </p>
        <h2 className={styles.text}>
          Don't take our word for it. See what customers are saying about us.
        </h2>
      </div>
      <div className={styles.reviewsContainer}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.reviewer}
            reviewText={review.reviewText}
            reviewer={review.reviewer}
            reviewerPhoto={review.reviewerPhoto}
            reviewerInfo={review.reviewerInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default HappyCustomersSection;
