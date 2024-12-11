import styles from "./Sidebar.module.scss";
import { HambergerMenu, LogoutCurve } from "iconsax-react";
import { SidebarItem } from "./components/SidebarItem/SidebarItem";
import { sideBarItem, useSidebar } from "@/layouts/PrimaryLayout/_components/Sidebar/useSidebar.ts";
import classNames from "classnames";

export const Sidebar = () => {
  const sidebarHook = useSidebar();
  return (
    <div className={classNames(styles.wrapper, { [styles.close]: sidebarHook.isOpen })}>
      <div className={styles.topMenu}>
        <div className={styles.primaryButtonBox}>
          <button
            type="button"
            className={classNames(styles.primaryButton, { [styles.close]: sidebarHook.isOpen })}
            onClick={sidebarHook.menuButtonClickHandler}
          >
            <HambergerMenu size={24} />
          </button>
          <span className={classNames(styles.text, "sidebarDateTimeText")}>2024/05/12 | 12:45</span>
        </div>

        {sideBarItem.map(({ title, path, Icon }) => {
          return (
            <SidebarItem key={title + path} title={title} isActive={sidebarHook.isActive(path)} path={path}>
              <Icon />
            </SidebarItem>
          );
        })}
      </div>

      <div className={styles.bottomMenu}>
        <SidebarItem title={"Logout"}>
          <LogoutCurve />
        </SidebarItem>
        <span className={classNames(styles.copyRight, "sidebarCopyRight")}>© copyright 2023 - Padeltown</span>
      </div>
    </div>
  );
};
