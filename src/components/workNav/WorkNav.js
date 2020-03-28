import React, { useRef } from 'react';

import styles from './WorkNav.module.scss';

const WorkNav = ({ setProjects, data: { webDesign, fullstack } }) => {
  const navRef = useRef(null);

  const onSelectProj = e => {
    const list = navRef.current.getElementsByClassName(`${styles.active}`);
    Object.keys(list).forEach(i => {
      if (list[i]) {
        list[i].classList.remove(`${styles.active}`);
      }
    });

    e.target.classList.add(`${styles.active}`);

    switch (e.target.id) {
      case 'design':
        setProjects(webDesign);
        break;
      case 'fullstack':
        setProjects(fullstack);
        break;
      default:
        return null;
    }
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <button
        id='design'
        onClick={onSelectProj}
        className={`${styles.nav__btn} ${styles.active}`}
      >
        Web Design
      </button>
      <button id='fullstack' onClick={onSelectProj} className={styles.nav__btn}>
        Full Stack
      </button>
    </nav>
  );
};

export default WorkNav;
