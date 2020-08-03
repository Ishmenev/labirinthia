import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './User.module.scss';
import Button from '../UI/Button/Button';

const User = () => {

  return(
    <div className={styles.user}>
      <Container>
        <Title subclass={styles.user__title}>
          <h2 className={styles.user__name}>Данные пользователя</h2>
        </Title>
        <Row>
          <Col sm={12} md={3}>
            <span className={styles.user__photo}></span>
          </Col>
          <Col sm={12} md={9}>
            <ul className={styles.user__info}>
              <li className={styles.user__firstname}>Имя: <span className={styles.user__text}>Александр</span></li>
              <li className={styles.user__social}>Социальная сеть: <span className={styles.user__logo}></span></li>
              <li className={styles.user__win}>Пройдено уровней: <span className={styles.user__text}>15</span></li>
              <li className={styles.user__creative}>Создано уровней: <span className={styles.user__text}>2</span></li>
            </ul>
            <Button domType={'button'}>Выйти</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default User;
