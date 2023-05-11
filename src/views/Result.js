import React from "react";
import { mean } from "lodash";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Result({ time, name, poses }) {
  const totalPoint = Math.round(mean(poses.map(({ point }) => point)));

  return (
    <div className="flex-wrapper">
      <div className="overral">
        <div>
          <h1>{name}</h1>
          <p>{`Total Time: ${time}`}</p>
        </div>
        <div className="single-chart">
          <CircularProgressbar
            value={totalPoint}
            text={`${totalPoint}%`}
            strokeWidth={10}
          />
        </div>
      </div>
      {poses.map(({ name, imageUrl, point }, index) => {
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
                    width: `${point}%`,
                    borderRadius: "6px",
                    background: "#012169",
                    animation: "progress 1s ease-in-out forwards",
                    opacity: "0",
                  }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Result;
