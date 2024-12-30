import styles from "./Wave.module.scss";
const Wave = ({ color }: { color: string }) => {
  return (
    <div className={styles.waveContainer}>
      <div
        className={styles.wave}
        style={{ background: color, borderColor: color }}
      ></div>
    </div>
  );
};

export default Wave;
