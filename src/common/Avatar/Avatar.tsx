import { Profile } from "iconsax-react";
import styles from "./Avatar.module.scss";

type TAvatar = { cover?: string };
export const Avatar = ({ cover }: TAvatar) => {
  return <div className={styles.container}>{cover ? <img src={cover} className={styles.cover} /> : <Profile />}</div>;
};
