import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import withInput from '../UI/Input/withInput';
import Input from '../UI/Input/Input';
import styles from './Feedback.module.scss';


class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        firstName: '',
        lastName: '',
        topic: '',
        email: '',
      }
    };
  }



  render() {

    const {inputChange, value, pushSubmit, errors} = this.props;

    return (
      <div className={styles.feedback}>
        <Container>
          <Title>
            <h2 className={styles.feedback__name}>Связаться</h2>
          </Title>
          <form id='form' onSubmit={pushSubmit} action='get'>
            <Row>
              <Col sm={12} md={6}>
                <Input format={'text'} onChange={inputChange} value={value} name='firstName' placeholder='Имя'/>
              </Col>
              <Col sm={12} md={6}>
                <Input format={'text'} onChange={inputChange} value={value} name='lastName' placeholder='Фамилия'/>
              </Col>
              <Col sm={12} md={6}>
                <Input format={'email'} onChange={inputChange} value={value} placeholder='Электронная почта'/>
                {errors.email.length > 0 && <span className={styles.feedback__error}>{errors.email}</span>}
              </Col>
              <Col sm={12} md={6}>
                <Input format={'text'} onChange={inputChange} value={value} name='topic' placeholder='Тема сообщения'/>
                {errors.topic.length > 0 && <span className={styles.feedback__error}>{errors.topic}</span>}
              </Col>
              <Col lg={12}>
                <Input format={'textarea'} cols='30' rows='5' onChange={inputChange} value={value} name='textarea' placeholder='Текст сообщения'/>
              </Col>
              <Col lg={12}>
                <input className={styles.feedback__button} type='submit' value='Отправить'></input>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    )

  }
}

export default withInput(Feedback)


