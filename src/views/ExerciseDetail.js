import * as React from "react";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import projImg1 from "../assets/img/a.jpg";
import projImg2 from "../assets/img/b.jpg";
import projImg3 from "../assets/img/c.jpg";

const list = [
  {
    id: 1,
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
    id: 4,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 5,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 6,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 7,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 8,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 9,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 10,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
  {
    id: 11,
    title: "Fat Burn",
    description: "10 minutes",
    imgUrl: projImg3,
  },
];

const ExerciseDetail = () => {
  const data = { nodes: list };

  return (
    <div style={{ height: "400px" }}>
      <Table data={data} className="Table1">
        {(tableList) => (
          <>
            <Header style={{ backgroundColor: "#012169" }}>
              <HeaderRow style={{ backgroundColor: "#012169" }}>
                <HeaderCell style={{ height: "50px" }}> </HeaderCell>
                <HeaderCell style={{ height: "50px" }}> Posture </HeaderCell>
                <HeaderCell style={{ height: "50px", paddingLeft: "90px" }}>
                  {" "}
                  Time{" "}
                </HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row
                  key={item.id}
                  item={item}
                  style={{ backgroundColor: "transparent" }}
                >
                  <Cell>
                    <img
                      src={item.imgUrl}
                      style={{
                        width: "150px",
                        height: "100px",
                        marginLeft: "10px",
                        marginBottom: "10px",
                        marginTop: "15px",
                      }}
                    />
                  </Cell>
                  <Cell>
                    <div className="pose-name">{item.title}</div>
                  </Cell>
                  <Cell className="time" style={{ paddingLeft: "100px" }}>
                    {item.description}
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  );
};

export default ExerciseDetail;
