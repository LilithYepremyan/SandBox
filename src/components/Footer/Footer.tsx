import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/icons/logo-light.svg";
import twitter from "../../assets/icons/twitter.svg";
import fb from "../../assets/icons/fb.svg";
import instagram from "../..//assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import browser from "../../assets/icons/browser.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Join our community by using our services and grow your business.
          </p>
          <Button text="Try It For Free" />
        </div>
        <hr />
      </div>
      <div className="container">
        <div className={styles.footerBlock}>
          <div className={styles.footerColumn}>
            <img src={logo} alt="logo" />
            <p>
              &#169; 2023 SandBox.
              <br />
              All rights reserved
            </p>
            <div className={styles.socials}>
              <img src={twitter} alt="twitter" />
              <img src={fb} alt="fb" />
              <img src={browser} alt="browser" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
          <div className={styles.footerColumn}>
            <p className={styles.footerColumnTitle}>Get in Touch</p>
            <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
            <p>
              info@email.com
              <br />
              00 (123) 456 78 90
            </p>
          </div>
          <div className={styles.footerColumn}>
            <p className={styles.footerColumnTitle}>Learn More</p>
            <Link to="/aboutUs" className={styles.link}>
              About Us
            </Link>
            <Link to="/ourStory" className={styles.link}>
              Our Story
            </Link>
            <Link to="/projects" className={styles.link}>
              Projects
            </Link>
            <Link to="/terms" className={styles.link}>
              Terms of Use
            </Link>
            <Link to="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
          </div>
          <div className={styles.footerLastColumn}>
            <p className={styles.footerColumnTitle}>Our Newsletter</p>
            <p>
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="email"
                placeholder="Email Address"
              />
              <button className={styles.button}>Join</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
