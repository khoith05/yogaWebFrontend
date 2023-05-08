import { Row, Tab } from "react-bootstrap";
import LoadingWrapper from "./LoadingWrapper";
import { GET_EXERCISES_LOADING } from "../utils/constant";
import { SequenceCard } from "./SequenceCard";
function SequenceTab(props) {
  const { exercises, levelTab, eventKey } = props;
  return (
    <Tab.Pane eventKey={eventKey}>
      <Row>
        <LoadingWrapper loadingKeys={[GET_EXERCISES_LOADING]}>
          {exercises
            .map(
              ({ level, name, duration, imageUrl, _id: id }, index) =>
                level === levelTab && (
                  <SequenceCard
                    key={index}
                    name={name}
                    duration={duration}
                    imgUrl={imageUrl}
                    id={id}
                  />
                )
            )
            .filter(Boolean)}
        </LoadingWrapper>
      </Row>
    </Tab.Pane>
  );
}
export default SequenceTab;
