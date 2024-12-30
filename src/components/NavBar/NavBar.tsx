import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/icons/logo.svg";
import styles from "./NavBar.module.scss";

const items = ["Demos", "Pages", "Projects", "Blog", "Blocks", "Documentation"];
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={`/`}>
        <img className={styles.logo} src={logo} alt="logo" />{" "}
      </Link>
      <div className={styles.navContainer}>
        <ul>
          {items.map((item) => (
            <Link className={styles.link} to={`/`} key={item}>
              {item}
            </Link>
          ))}
        </ul>
        <Button text="Contact" />
      </div>
    </nav>
  );
};

export default NavBar;
