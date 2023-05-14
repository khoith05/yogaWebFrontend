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

const ExerciseDetail = ({ poses }) => {
  const data = { nodes: poses };

  return (
    <div className="pose-table-wrapper">
      <div className="pose-table__vritual-header "></div>
      <Table data={data} className="pose-table">
        {(tableList) => (
          <>
            {/* <div></div> */}
            <Header
              style={{ backgroundColor: "#012169" }}
              className="pose-table-header"
            >
              <HeaderRow style={{ backgroundColor: "#012169" }}>
                <HeaderCell
                  style={{ height: "50px" }}
                  className="pose-table__header-left"
                >
                  {" "}
                </HeaderCell>
                <HeaderCell style={{ height: "50px" }}> Posture </HeaderCell>
                <HeaderCell className="pose-table__header-right table-align-right">
                  {" "}
                  Time{" "}
                </HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row
                  key={item.index}
                  // item={item}
                  style={{ backgroundColor: "transparent" }}
                >
                  <Cell>
                    <div className="d-flex justify-content-center">
                      <img src={item.imageUrl} className="pose-image" />
                    </div>
                  </Cell>
                  <Cell className="table-overflow">
                    {item.name}
                    {/* <div className="pose-name"></div> */}
                  </Cell>
                  <Cell className="time table-align-right">{`${item.duration} sec`}</Cell>
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
