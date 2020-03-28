import React from 'react';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <form className={styles.contact}>
      <h1 className={styles.contact__title}>Contact</h1>
      <div className={styles.contact__content}>
        <input
          className={styles.contact__input}
          type='text'
          placeholder='Name'
        />
        <input
          className={styles.contact__input}
          type='email'
          placeholder='Email'
        />
        <textarea
          defaultValue='Ask me something . . .'
          className={styles.contact__summary}
        ></textarea>
        <button className={styles.contact__btn}>send</button>
      </div>
    </form>
  );
};

export default Contact;
