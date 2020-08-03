import React, {Component} from 'react';
import Loader from '../components/Loader/Loader';
import MainPage from '../pages/MainPage';
import Page404 from '../pages/Page404';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      mainData: {
        data: {
          properties: [
            {id: 0, title: 'Обновление от 25.08.19', text: 'Мы выпустили 100500 новых уровней и искренне поздравляем вас с обновлением! Удачной игры! Удачной игры! Удачной игры!', date: '25/08/2019'},
            {id: 1, title: 'С 1 сентября!', text: 'Поздравляем наших дорогих подписчиков с этим прекрасным праздником! Поздравляем наших дорогих подписчиков с этим прекрасным праздником! Поздравляем наших дорогих подписчиков с этим прекрасным праздником!', date: '01/11/2019'},
            {id: 2, title: 'С 8 марта!', text: 'Поздравляем наших дорогих подписчиков с этим прекрасным праздником! Поздравляем наших дорогих подписчиков с этим прекрасным праздником! Поздравляем наших дорогих подписчиков с этим прекрасным праздником!', date: '01/11/2019'},
            {id: 3, title: 'Happy New Year!', text: 'Мы выпустили 100500 новых уровней и искренне поздравляем вас с обновлением! Удачной игры! Удачной игры! Удачной игры!', date: '25/08/2019'},
            {id: 4, title: 'Этот День Победы, порохом пропах...', text: 'Мы выпустили 100500 новых уровней и искренне поздравляем вас с обновлением! Удачной игры! Удачной игры! Удачной игры!', date: '25/08/2019'},
            {id: 5, title: 'Этот праздник с  сединою на висках', text: 'Поздравляем наших дорогих подписчиков с этим прекрасным праздником! Поздравляем наших дорогих подписчиков с этим прекрасным праздником! Поздравляем наших дорогих подписчиков с этим прекрасным праздником!', date: '01/11/2019'}
          ],
          levels: [
              {id: 1, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 2, type: 'creative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 3, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 4, type: 'creative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 5, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 6, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 7, type: 'creative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 8, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 9, type: 'creative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 10, type: 'creative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 11, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 12, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 13, type: 'creative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 14, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 15, type: 'creative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 16, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'},
              {id: 17, type: 'narrative', description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'}
            ]

        },
        isFetching: false
      }
    }
  }


  render() {
    const {isFetching, data} = this.state.mainData;

    let content = <Loader/>

    if (!isFetching) {
      if (data) {
          content = <MainPage data={data} />
      } else {
          content = <Page404 />
      }
    }
    
    return (
      content
    )
  }
}