import styles from "./EpilepsyChart.module.scss";

type TEpilepsyChart = { size: "md" | "lg"; theme: "white" | "purple"; value: number | string };
export const EpilepsyChart = ({ size = "md", theme, value }: TEpilepsyChart) => {
  return (
    <div data-size={size} data-theme={theme} className={styles.container} aria-hidden>
      {new Array(3).fill("").map((_, index) => (
        <span key={index} className={styles.box} data-active={+value >= index + 1} />
      ))}
    </div>
  );
};
