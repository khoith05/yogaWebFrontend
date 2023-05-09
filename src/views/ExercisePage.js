import * as React from "react";
import ExerciseDetail from "./ExerciseDetail";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

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
          style={{ color: "#0a2147", fontWeight: "800" }}
        >
          How to place your camera
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          height: "400px",
          maxHeight: "550px",
          width: "5100px",
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
        <button className="my-button" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const ExercisePage = ({ onStartClick, exercise }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const { duration, name, poses = [] } = exercise;

  return (
    <div className="flex-wrapper">
      <div className="overral">
        <div>
          <h1>{name}</h1>
          <p>{`${duration} minutes`}</p>
        </div>
        <div className="d-flex flex-column">
          <button className="my-button1" onClick={() => setModalShow(true)}>
            Camera Placing
          </button>
          <button className="my-button1" onClick={onStartClick}>
            Start
          </button>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <ExerciseDetail poses={poses} />
    </div>
  );
};

export default ExercisePage;
