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
    <div style={{ height: "400px" }} className="pose-table-wrapper">
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
                <HeaderCell
                  style={{ height: "50px", paddingLeft: "90px" }}
                  className="pose-table__header-right"
                >
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
                    <img
                      src={item.imageUrl}
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
                    <div className="pose-name">{item.name}</div>
                  </Cell>
                  <Cell className="time" style={{ paddingLeft: "100px" }}>
                    {`${item.duration} sec`}
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
