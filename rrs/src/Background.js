import React from "react";
import backgroundvideo from "./videos/train.mp4";
import "./Background.css";
const Background = () => {
    return (
        <div className="main">
            <video src={backgroundvideo} autoPlay loop muted />
        </div>
    );
}
export default Background;