import React from 'react';
import Intro from '../components/Intro/Intro';
import Indicators from '../components/Indicators/Indicators';
import Objects from '../components/Objects/Objects';
import Cover from '../components/Cover/Cover';
import { Container } from 'reactstrap';

const OwnLevel = () => {
      
  return (
    <React.Fragment>
      <Intro introType={'local'} label='Создать уровень'/>
      <Container>
        <Indicators />
        <Cover />
        <Objects />
      </Container>
    </React.Fragment>

  )

}

export default OwnLevel;