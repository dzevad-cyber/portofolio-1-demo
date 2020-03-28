import React from 'react';

import styles from './Header.module.scss';

import { ReactComponent as Menu } from '../../assets/icons/menu-24px.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>dzevad</div>
      <Menu className={styles.header__menu} />
      <nav className={styles.header__nav}>
        <a className={styles.header__link} href='#about'>
          about me
        </a>
        <a className={styles.header__link} href='#skills'>
          skills
        </a>
        <a className={styles.header__link} href='#work'>
          my work
        </a>
      </nav>
    </div>
  );
};

export default Header;
