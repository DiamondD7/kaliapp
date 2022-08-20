import React from "react";
import HomePage from "./components/Home";
import PhotosPage from "./components/Photos";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    case "/PhotosPage":
      component = <PhotosPage />;
      break;
    default:
      component = <HomePage />;
      break;
  }

  return (
    <div>
      <div>
        <div className="ui secondary pointing menu">
          <a className="item" href="/">
            Home
          </a>

          <a className="item" href="/PhotosPage">
            Photos
          </a>
        </div>
        {component}
      </div>
    </div>
  );
}
