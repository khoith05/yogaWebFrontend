import * as React from 'react';
import {Table, Header, HeaderRow, HeaderCell,Body, Row, Cell, img} from '@table-library/react-table-library/table'
import projImg1 from "../assets/img/a.jpg";
import projImg2 from "../assets/img/b.jpg";
import projImg3 from "../assets/img/c.jpg";
import './ExercisePage.css'

const list = [
  {
    id : 1,
    title: "Quick Streching Sequence",
    description: "2 minutes",
    imgUrl: projImg1,
  },
  {
    id: 2,
    title: "Yogic Cardio",
    description: "5 minutes",
    imgUrl: projImg2,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 3,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
];
const ExerciseDetail= () => {

  const data = {nodes: list};

  return (
  <div style={{height: '400px'}}>
  <Table data = {data} className = "Table1">{(tableList) => (
    <>
    <Header>
      <HeaderRow style = {{backgroundColor: '#F4DCDC'}}>
        <HeaderCell>  </HeaderCell>
        <HeaderCell> Posture </HeaderCell>
        <HeaderCell>Time </HeaderCell>
      </HeaderRow>
    </Header>
    <Body>
      {tableList.map((item) => (
        <Row key = {item.id} item = {item} style = {{backgroundColor: '#F4DCDC'}}>           
          <Cell>
            <img src  = {item.imgUrl} style={{ width: '150px', height: '60px', marginLeft: '10px', marginBottom: '5px' }}/>
          </Cell>
          <Cell>{item.title}</Cell>
          <Cell>{item.description}</Cell>        
        </Row>
      ))}
    </Body>
    </>
  )}</Table>
  </div>
  );
};

export default ExerciseDetail;