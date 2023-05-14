import { ReactComponent as ACLogo } from "icons/logo.svg"
import { ReactComponent as SearchIcon } from "icons/search.svg"
import { ReactComponent as CartIcon } from "icons/cart.svg"
import { ReactComponent as SunIcon } from "icons/sun.svg"

import styles from "./Header.module.css"


export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerContainer} mx-auto`}>
       
        <nav className={styles.navbarMenu}>
          <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                男款
              </a></li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                女款
              </a> </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                最新消息
              </a></li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                客製商品
              </a></li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                聯絡我們
              </a></li>
          </ul>

          <a className={styles.headerLogoContainer} href="/">
            <ACLogo className="icon-logo cursor-point" />
          </a>

          <ul className={`${styles.navList} ${styles.siteActionList}`}>

            <li className={styles.navItem}>
              <SearchIcon className={`${styles.navIcon} ${styles.cursorPoint}`} />
            </li>

            <li className={styles.navItem}>
              <CartIcon className={`${styles.navIcon} ${styles.cursorPoint}`} />
            </li>

            <li id="theme-toggle" className={styles.navItem}>
              <SunIcon className={`${styles.navIcon} ${styles.cursorPoint}`} />
            </li>
          </ul>
        </nav>

        
      </div>
    </header>
  );
}