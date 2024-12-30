import styles from "./Button.module.scss";
type ButtonProps = {
  text: string | number;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} >
      {text}
    </button>
  );
};

export default Button;
