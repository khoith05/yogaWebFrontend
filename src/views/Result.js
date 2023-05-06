import { height } from '@mui/system';
import React from 'react';
import { useState, useEffect } from 'react';

function Result () {
    return (
        <div className="flex-wrapper">
            <div className='overral'>
                <div>
                    <h1>Juvenile Restoration</h1>
                    <p>Total Time: 10:50</p>
                </div>
                <div class="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                        stroke-dasharray="30, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">30%</text>
                    </svg>
                </div>
            </div>
            
            <div className="pose-card">
                <div className="card-image">
                </div>
                <div className="category"> Cow Pose </div>
                <div className="skill-box">
                    <div className="skill-bar">
                        <div style={{
                            position:"relative",
                            display:"block",
                            height:"100%",
                            width:"82%",
                            borderRadius:"6px",
                            background:"#012169",
                            animation: "progress 1s ease-in-out forwards",
                            opacity:"0"
                        }}>
                        </div>
                        <text class="percentage">30%</text>
                    </div>
                </div>
            </div>
            <div className="pose-card">
                <div className="card-image">
                </div>
                <div className="category"> Buddist Tree </div>
                <div className="skill-box">
                    <div className="skill-bar">
                        <span style={{
                            position:"relative",
                            display:"block",
                            height:"100%",
                            width:"50%",
                            borderRadius:"6px",
                            background:"#012169",
                            animation: "progress 1s ease-in-out forwards",
                            opacity:"0"
                        }}>
                        </span>
                    </div>
                </div>
            </div>
            <div className="pose-card">
                <div className="card-image">
                </div>
                <div className="category"> Mountain Climbing and The United States of America</div>
                <div className="skill-box">
                    <div className="skill-bar">
                        <span style={{
                            position:"relative",
                            display:"block",
                            height:"100%",
                            width:"15%",
                            borderRadius:"6px",
                            background:"#012169",
                            animation: "progress 1s ease-in-out forwards",
                            opacity:"0"
                        }}>
                        </span>
                    </div>
                </div>
            </div>
            <div className="pose-card">
                <div className="card-image">
                </div>
                <div className="category"> Goddess </div>
                <div className="skill-box">
                    <div className="skill-bar">
                        <span style={{
                            position:"relative",
                            display:"block",
                            height:"100%",
                            width:"25%",
                            borderRadius:"6px",
                            background:"#012169",
                            animation: "progress 1s ease-in-out forwards",
                            opacity:"0"
                        }}>
                        </span>
                        <h1>jdhfksdhf</h1>
                    </div>
                </div>
            </div>
        </div>
        
    )

    
}

export default Result;