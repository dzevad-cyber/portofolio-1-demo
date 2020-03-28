import React from 'react';

import styles from './About.module.scss';

import dotted from '../../assets/imgs/dotted-shape.png';

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <h1 className={styles.about__title}>about</h1>
      <div className={styles.about__body}>
        <div className={styles.about__txt}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui totam
            doloremque corrupti reprehenderit cumque illum illo? Iure, provident
            a recusandae magni nulla facilis ducimus dolores?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            quisquam numquam beatae accusantium repudiandae laudantium
            consequuntur velit, architecto perspiciatis aliquid quam tempore
            quas vitae corporis iusto possimus est ratione laboriosam!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            accusamus qui illo laboriosam enim non?
          </p>
        </div>
        <img className={styles.about__shapes} src={dotted} alt='dotted shape' />
      </div>
    </section>
  );
};

export default About;
