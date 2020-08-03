import React, { Component } from 'react';
import styles from './Input.module.scss';

export default class Input extends Component {

  render() {

    const {format} = this.props;
    let content = null;

    if (format === 'text') {
      content = 
          <input type='text' 
            className={styles.feedback__input}
            {...this.props} 
            noValidate/>
    } 

    else if (format === 'email') {
      content = 
        <input type='text'
          className={styles.feedback__input}
          name='email'
          {...this.props} 
          noValidate/>
    }

    else if (format === 'textarea') {
      content = 
          <textarea type='text' 
            className={styles.feedback__textarea}
            id='feedback'
            {...this.props} 
            noValidate/>
    } 


    return(
      content
    ) 
  }
}


