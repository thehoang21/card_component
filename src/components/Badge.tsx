import { BadgeInterface } from "../types";
import styles from "./Badge.module.css";

const Badge = ({ text, filled }: BadgeInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <small className={`${styles.badge} uppercase ${filledClass}`}>{text}</small>
    // goi style voi thuoc tinh badge de truyen vao text
  );
};

export default Badge;
