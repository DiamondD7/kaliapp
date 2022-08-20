import React from "react";
import picone from "../images/HeadersPhotos/P1080187p1.jpg";
import pictwo from "../images/HeadersPhotos/P1080200p1.jpg";
import picthree from "../images/HeadersPhotos/P1080210p1.jpg";

export default function HomePage() {
  var instagramLink = "https://www.instagram.com/kali.graphy/";
  return (
    <div>
      <div className="header--div">
        {/* <img className="picone" alt="first pic" src={picone} />
        <img className="pictwo" alt="second pic" src={pictwo} />
        <img className="picthree" alt="third pic" src={picthree} /> */}
        <h1 className="welcome--sign">Kali Photography</h1>

        {/* <p className="intro"></p> */}

        <div>
          <ul className="contact-icon">
            <li className="icon">
              <a className="anchor" href={instagramLink} target="_blank">
                <i class="inverted instagram icon"></i>
              </a>
            </li>
            <li className="icon">
              <i class="inverted whatsapp icon"></i>
            </li>
            <li className="icon">
              <i class="inverted envelope outline icon"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="second--container">
        <h2 className="quote">
          "If I could tell the story in words, I wouldn't need to lug around a
          camera"
        </h2>
        <p className="author">&mdash; Lewis Hine</p>
      </div>
      <div className="second--header--div"></div>
    </div>
  );
}
