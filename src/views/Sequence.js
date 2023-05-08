import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";
import getExercises from "../service/getExercises";
import SequenceTab from "./SequenceTab";

function Sequence() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getExercises().then((res) => setExercises(res));
  }, []);

  return (
    <section className="project" id="sequence">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Sequences</h2>
                  <p>
                    Choose a sequence to embark on and we'll tell you how to do
                    it
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="Easy">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="Easy">Easy</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Medium">Medium</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Hard">Hard</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <SequenceTab
                        exercises={exercises}
                        eventKey="Easy"
                        levelTab={0}
                      />
                      <SequenceTab
                        exercises={exercises}
                        eventKey="Medium"
                        levelTab={1}
                      />
                      <SequenceTab
                        exercises={exercises}
                        eventKey="Hard"
                        levelTab={2}
                      />
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Sequence;
