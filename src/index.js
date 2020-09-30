import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const State = {
  placesCount: 312
};

ReactDOM.render(
    <App
      placesCount={State.placesCount}
    />,
    document.querySelector(`#root`)
);
