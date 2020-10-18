import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {OffersType, ReviewsType} from "../../types";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import RoomScreen from "../room-screen/room-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";

const App = (props) => {

  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen />
        </Route>
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route path="/offer/:id" exact>
          <RoomScreen
            offer={offers[0]}
            reviews={reviews}
            offers={offers.slice(0, 3)}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: OffersType,
  reviews: ReviewsType,
};

export default App;
