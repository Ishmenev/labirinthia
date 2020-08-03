import React from 'react';
import styles from './Level.module.scss';
import Button from '../UI/Button/Button';

const Level = ({number, description}) => {

  return (
    <li className={styles.levels__item}>
      <img className={styles.levels__image} alt='pic.Level'></img>
      <div className={styles.levels__wrapper}>
        <h3 className={styles.levels__title}>Вступление</h3>
        <span className={styles.levels__number}>Уровень: {number}</span>
        <p className={styles.levels__description}>{description}</p>
        <Button domType={'simple'}>Начать</Button>
      </div>
    </li>
  )

}

export default Level;
