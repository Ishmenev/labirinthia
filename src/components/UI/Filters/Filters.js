import React from 'react';
import styles from './Filters.module.scss';
import Title from '../Title/Title';
import {NavLink} from 'react-router-dom';
import {Router, Route, Switch} from 'react-router-dom';
import Options from '../../Options/Options';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

function Filters() {

  return (
      <div className={styles.filters}>
        <Title>
          <h2 className={styles.filters__name}>Уровни</h2>
          <h2 className={styles.filters__display}>К сожалению, этот раздел доступен только с компьютера</h2>
        </Title>
        <Router history={history}>
          <div className={styles.filters__wrapper}>
            <NavLink
              to='/games/all'
              className={styles.filters__link}
              activeClassName={styles.filters__link_active}
              >
              Все</NavLink>
            <NavLink
              to='/games/creative'
              className={styles.filters__link}
              activeClassName={styles.filters__link_active}
              >
              Пользовательские</NavLink>
            <NavLink
              to='/games/narrative'
              className={styles.filters__link}
              activeClassName={styles.filters__link_active}
              >
              Сюжетные</NavLink>
          </div>
          <Switch>
            <Route path='/games/:filter?' component={Options} />              
          </Switch>
        </Router>
      </div>
  )
}

export default Filters;