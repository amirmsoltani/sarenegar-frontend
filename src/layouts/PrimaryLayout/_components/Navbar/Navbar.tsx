import PadelLogo from '@/assets/svg/padel-logo.svg';
import styles from './Navbar.module.scss';
import { Avatar } from './components/Avatar/Avatar';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <PadelLogo className={styles.logo}/>
      <div className={styles.buttonBox}>
        <Avatar>
          <span className={styles.profile}>SP</span>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
