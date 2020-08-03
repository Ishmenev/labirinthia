import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Indicators.module.scss';
import Title from '../UI/Title/Title';

const Indicators = () => {

  return (
    <div className={styles.indicators}>
      <Title>
        <h2 className={styles.indicators__name}>Параметры</h2>
        <h2 className={styles.indicators__display}>К сожалению, этот раздел доступен только с компьютера</h2>
      </Title>
      <Row>
        <Col>
          <Row>
            <Col md={10} lg={7} xl={5}>
              <p className={styles.indicators__description}>Высота уровня,<br/><span className={styles.indicators__measure}> в количестве клеток:</span></p>
            </Col>
            <Col md={10} lg={8} xl={6}>
            <input type='text' className={styles.indicators__input} placeholder='Высота'></input>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col md={10} lg={7} xl={5}>
              <p className={styles.indicators__description}>Ширина уровня,<br/><span className={styles.indicators__measure}> в количестве клеток:</span></p>
            </Col>
            <Col md={10} lg={8} xl={6}>
            <input type='text' className={styles.indicators__input} placeholder='Ширина'></input>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );

}

export default Indicators;