import React from 'react';

import styles from './Skills.module.scss';

import { ReactComponent as Css } from '../../assets/icons/css3.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Html } from '../../assets/icons/html5.svg';
import { ReactComponent as Javascript } from '../../assets/icons/javascript.svg';
import { ReactComponent as Mongodb } from '../../assets/icons/mongodb.svg';
import { ReactComponent as Nodejs } from '../../assets/icons/nodejs.svg';
import { ReactComponent as Reactjs } from '../../assets/icons/reactjs.svg';
import { ReactComponent as Sass } from '../../assets/icons/sass.svg';
import { ReactComponent as Express } from '../../assets/icons/express.svg';

const Skills = () => {
  return (
    <section className={styles.skills} id='skills'>
      <h1 className={styles.skills__title}>skills</h1>
      <div className={styles.skills__body}>
        <div className={styles.skills__txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          impedit rem officiis officia amet laudantium reiciendis nemo quo eum
          est modi fuga, voluptatum nobis deserunt autem? Exercitationem id
          quaerat animi pariatur iste error odio, cumque corrupti harum
          doloremque molestias rerum quo quis? Quibusdam quidem minima expedita
          voluptatibus dolores est praesentium!
        </div>
        <div className={styles.skills__box}>
          <div className={styles.skills__iconBox}>
            <Html className={styles.icon} />
            <p className={styles.skills__html}>HTML</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Javascript className={styles.icon} />
            <p className={styles.skills__javascript}>Javascript</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Nodejs className={styles.icon} />
            <p className={styles.skills__nodejs}>NodeJS</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Css className={styles.icon} />
            <p className={styles.skills__css3}>CSS 3</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Express className={styles.icon} />
            <p className={styles.skills__express}>Express</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Mongodb className={styles.icon} />
            <p className={styles.skills__mongodb}>MongoDB</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Reactjs className={styles.icon} />
            <p className={styles.skills__react}>React</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Sass className={styles.icon} />
            <p className={styles.skills__sass}>Sass</p>
          </div>
          <div className={styles.skills__iconBox}>
            <Github className={styles.icon} />
            <p className={styles.skills__github}>Github</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
