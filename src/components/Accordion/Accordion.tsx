import React, { useState } from "react";
import arrow from "../../assets/icons/arrow.png";
import styles from "./Accordion.module.scss";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.button} ${isOpen ? styles.buttonOpen : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
          src={arrow}
          alt="img"
        />

        {title}
      </button>
      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}>
        {content}
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const items = [
    {
      title: "Professional Design",
      content:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    },
    {
      title: "Top-Notch Support",
      content:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    },
    {
      title: "Header and Slider Options",
      content:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
