import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <p className={styles.footer__txt}>&copy; created 2020</p>
    </section>
  );
};

export default Footer;
