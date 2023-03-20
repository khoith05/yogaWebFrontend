import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { SequenceCard } from "../component/SequenceCard";
import projImg1 from "../assets/img/a.jpg";
import projImg2 from "../assets/img/b.jpg";
import projImg3 from "../assets/img/c.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Sequence () {

  const sequences = [
    {
      title: "Quick Streching Sequence",
      description: "2 minutes",
      imgUrl: projImg1,
    },
    {
      title: "Yogic Cardio",
      description: "5 minutes",
      imgUrl: projImg2,
    },
    {
      title: "Fat Burn",
      description: "10 minutes",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="sequence">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Sequences</h2>
                <p>Choose a sequence to embark on and we'll tell you how to do it</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Easy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Medium</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hard</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          sequences.map((sequence, index) => {
                            return (
                              <SequenceCard
                                key={index}
                                {...sequence}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                        {
                          sequences.map((sequence, index) => {
                            return (
                              <SequenceCard
                                key={index}
                                {...sequence}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Sequence;