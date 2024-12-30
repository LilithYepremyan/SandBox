import Card from "../../components/Card/Card";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import avatar1 from "../../assets/images/avatar1.jpg";
import avatar2 from "../../assets/images/avatar2.jpg";
import avatar3 from "../../assets/images/avatar3.jpg";
import avatar4 from "../../assets/images/avatar4.jpg";
import styles from "./CompanyFactsSection.module.scss";

const items = [
  { icon: icon1, count: "1000+", info: "Completed Projects" },
  { icon: icon2, count: "50K+", info: "Happy Customers" },
  { icon: icon3, count: "20+", info: "Awards Won" },
];

const teamMembers = [
  {
    avatar: avatar1,
    name: "Coriss Ambady",
    position: "Financial Analyst",
    info: "Fermentum massa justo sit amet risus morbi leo.",
  },
  {
    avatar: avatar2,
    name: "Cory Zamora",
    position: "Marketing Specialist",
    info: "Fermentum massa justo sit amet risus morbi leo.",
  },
  {
    avatar: avatar3,
    name: "Nikolas Brooten",
    position: "Sales Manager",
    info: "Fermentum massa justo sit amet risus morbi leo.",
  },
  {
    avatar: avatar4,
    name: "Jackie Sanders",
    position: "Investment Planner",
    info: "Fermentum massa justo sit amet risus morbi leo.",
  },
];
type infoCardProps = {
  icon: string;
  count: string;
  info: string;
};

const InfoCard: React.FC<infoCardProps> = ({ icon, count, info }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.icon}>
        <img src={icon} alt="icon"></img>
      </div>
      <p className={styles.count}>{count}</p>
      <p className={styles.info}>{info}</p>
    </div>
  );
};

const CompanyFactsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.title}>Company facts</p>
          <h2>We are proud of our design team</h2>
          <p className={styles.info}>
            Just sit back and relax while we take care of your business needs
            for you.
          </p>
        </div>
        <div className={styles.infoCardsContainer}>
          {items.map((item) => (
            <InfoCard
              key={item.count}
              icon={item.icon}
              count={item.count}
              info={item.info}
            />
          ))}
        </div>
      </div>
      <div className={styles.teamContainer}>
        {teamMembers.map((item) => (
          <Card
            key={item.name}
            avatar={item.avatar}
            name={item.name}
            position={item.position}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyFactsSection;
