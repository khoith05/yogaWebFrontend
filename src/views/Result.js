import React from "react";
import { useSelector } from "react-redux";
import { selectResult } from "../store/pose";
import { mean } from "lodash";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";

function Result() {
  const { time, points } = useSelector(selectResult);
  const totalPoint = Math.round(mean(points));
  const timeFormated = millisToMinutesAndSeconds(time);
  const { poses, name } = useSelector((state) => state.pose.exercise);

  return (
    <div className="flex-wrapper">
      <div className="overral">
        <div>
          <h1>{name}</h1>
          <p>{`Total Time: ${timeFormated}`}</p>
        </div>
        <div className="single-chart">
          <svg viewBox="0 0 36 36" className="circular-chart orange">
            <path
              className="circle-bg"
              d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray="30, 100"
              d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {`${totalPoint}%`}
            </text>
          </svg>
        </div>
      </div>
      {poses.map(({ name, imageUrl }, index) => {
        return (
          <div className="pose-card" key={index}>
            <div className="card-image">
              <img src={imageUrl} />
            </div>
            <div className="category"> {name} </div>
            <div className="skill-box">
              <div className="skill-bar">
                <div
                  style={{
                    position: "relative",
                    display: "block",
                    height: "100%",
                    width: `${points[index]}%`,
                    borderRadius: "6px",
                    background: "#012169",
                    animation: "progress 1s ease-in-out forwards",
                    opacity: "0",
                  }}
                ></div>
                <p className="percentage">30%</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Result;
