import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {OffersType, ReviewsType} from "../../types";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import RoomScreen from "../room-screen/room-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MainScreenWrapped = withActiveItem(MainScreen);
const App = (props) => {

  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreenWrapped />
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
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: OffersType,
  reviews: ReviewsType,
};

export default App;
