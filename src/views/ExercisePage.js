import * as React from 'react';
import {useTheme} from '@table-library/react-table-library/theme'
import {Container, Row} from 'react-bootstrap'
import ExerciseDetail from './ExerciseDetail';
import {HashLink} from 'react-router-hash-link';
import './ExercisePage.css'

const ExercisePage= () => {
  return (
    <div className="banner1" >
    <Container>
      <Row>
      <h10>
      Restore & Rejuvenate
      </h10>
      <h9>30 mins
        <HashLink to = ''>
      <button className="my-button"><span>Instructions for placing the camera</span></button></HashLink></h9> 
      
      </Row>
    </Container>
    <Container>
    <ExerciseDetail></ExerciseDetail>
    </Container>
    <Container>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button className="my-button1">Start</button>
    </div>
    </Container>
    
    </div>
  );
        

}

export default ExercisePage;