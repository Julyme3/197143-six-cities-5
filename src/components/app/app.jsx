import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import RoomScreen from "../room-screen/room-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";

const App = (props) => {

  const {placesCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen
            placesCount={placesCount}
            offers={offers}
          />
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
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
