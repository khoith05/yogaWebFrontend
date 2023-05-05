import * as React from "react";
import { Container, Row } from "react-bootstrap";
import ExerciseDetail from "./ExerciseDetail";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

import "./ExercisePage.css";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#651D1D", textAlign: "center", margin: "auto" }}
        >
          Instructions for placing the camera
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          height: "400px",
          maxHeight: "550px",
          width: "500px",
          maxWidth: "800px",
        }}
      >
        <div
          className="player-wrapper"
          style={{
            height: "380px",
            maxHeight: "400px",
            width: "760px",
            maxWidth: "800px",
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=VHjMJeLsI0o&list=RDVHjMJeLsI0o&start_radio=1"
            className="react-player"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
          />
        </div>
      </Modal.Body>
      <Modal.Footer
        style={{ color: "#651D1D", textAlign: "center", margin: "auto" }}
      >
        <button className="my-button-close" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const ExercisePage = (props) => {
  const { onStartClick } = props;

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="banner1">
      <Container>
        <Row>
          <p className="h10">Restore & Rejuvenate</p>
          <p className="h9">
            30 mins
            <button className="my-button" onClick={() => setModalShow(true)}>
              <span>Instructions for placing the camera</span>
            </button>
          </p>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Row>
      </Container>
      <Container>
        <ExerciseDetail></ExerciseDetail>
      </Container>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="my-button1" onClick={onStartClick}>
            Start
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ExercisePage;
