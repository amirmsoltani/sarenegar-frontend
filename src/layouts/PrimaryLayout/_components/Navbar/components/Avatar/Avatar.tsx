import  { ReactNode } from 'react';
import styles from './Avatar.module.scss';

interface PropsType {
  children: ReactNode;
}

export const Avatar = ({ children }: PropsType) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

