import React from "react";
import picone from "../images/HeadersPhotos/P1080187p1.jpg";
import pictwo from "../images/HeadersPhotos/P1080200p1.jpg";
import picthree from "../images/HeadersPhotos/P1080210p1.jpg";

export default function HomePage() {
  return (
    <div>
      <div className="header--div">
        <img className="picone" alt="first pic" src={picone} />
        <img className="pictwo" alt="second pic" src={pictwo} />
        <img className="picthree" alt="third pic" src={picthree} />
        <h1 className="welcome--sign">Kaliphotography</h1>
      </div>
    </div>
  );
}
