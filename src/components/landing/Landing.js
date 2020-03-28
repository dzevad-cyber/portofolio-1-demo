import React from 'react';

import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <section className={styles.landing}>
      <div className={styles.landing__info}>
        <div>Hi,</div>
        <div>
          I'm <span className={styles.landing__name}>Dzevad</span>
        </div>
        <div>Full Stack Developer</div>
        <div className={styles.landing__skills}>
          css / JavaScript / html / nodejs / mongodb
        </div>
        <button className={styles.landing__btnContact}>
          <a href='#contact'>contact me</a>
        </button>
      </div>
      <div className={styles.landing__profileImg}></div>
    </section>
  );
};

export default Landing;
