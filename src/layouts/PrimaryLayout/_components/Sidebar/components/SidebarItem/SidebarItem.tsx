import { ReactNode } from 'react';
import styles from './SidebarItem.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface PropsType {
  title: string;
  children: ReactNode;
  isActive?: boolean;
  path?: string;
}

export const SidebarItem = (props: PropsType) => {

  if (props.path) {
    return (
      <Link to={props.path} className={classNames(styles.wrapper, { [styles.active]: props.isActive })}>
        {props.children}
        <span className={classNames('sidebarItemTitle', styles.sidebarItemTitle)}>{props.title}</span>
      </Link>);
  }

  return (
    <div className={classNames(styles.wrapper, { [styles.active]: props.isActive })}>
      {props.children}
      <span className={classNames('sidebarItemTitle', styles.sidebarItemTitle)}>{props.title}</span>
    </div>);
};
