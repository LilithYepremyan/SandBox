import fbLogo from "../../assets/icons/FbFull.svg";
import twitterLogo from "../../assets/icons/TwitterFull.svg";
import browserLogo from "../../assets/icons/browserFull.svg";
import styles from "./Card.module.scss";

const DEFAULT_AVATAR =
  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg";

type CardProps = {
  avatar: string;
  name: string;
  position: string;
  info: string;
};

const Card: React.FC<CardProps> = ({ avatar, name, position, info }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={avatar ? avatar : DEFAULT_AVATAR}
        alt="avatar"
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.position}>{position}</p>
      <p className={styles.info}>{info}</p>
      <div className={styles.socials}>
        <img src={twitterLogo} alt="twitter" />
        <img src={fbLogo} alt="fb" />
        <img src={browserLogo} alt="browser" />
      </div>
    </div>
  );
};

export default Card;
