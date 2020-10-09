import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const State = {
  placesCount: 312
};

ReactDOM.render(
    <App
      placesCount={State.placesCount}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
