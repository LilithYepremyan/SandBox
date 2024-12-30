import Rating from "../Rating/Rating";
import styles from "./ReviewCard.module.scss";

const DEFAULT_AVATAR =
  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg";

type ReviewCardProps = {
  reviewText: string;
  reviewer: string;
  reviewerPhoto: string;
  reviewerInfo: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewText,
  reviewer,
  reviewerPhoto,
  reviewerInfo,
}) => {
  return (
    <div className={styles.reviewCard}>
      <Rating rating={4} />
      <p className={styles.reviewText}>{reviewText}</p>

      <div className={styles.reviewer}>
        <img
          className={styles.reviewerPhoto}
          src={reviewerPhoto ? reviewerPhoto : DEFAULT_AVATAR}
          alt="avatar"
        />
        <div>
          <h3>{reviewer}</h3>
          <p className={styles.reviewerInfo}>{reviewerInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
