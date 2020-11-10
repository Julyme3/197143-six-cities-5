import React from "react";
import {Router as BrowserRouter, Route, Switch} from "react-router-dom";
import {OffersType, ReviewsType} from "../../types";
import {AppRoute} from "../../const";
import browserHistory from "../../browser-history";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import RoomScreen from "../room-screen/room-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import PrivateRoute from "../private-route/private-route";

const MainScreenWrapped = withActiveItem(MainScreen);
const App = (props) => {

  const {offers, reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <MainScreenWrapped />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <AuthScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => {
          return (
            <FavoritesScreen
              offers={offers}
            />
          );
        }} />
        <Route path={AppRoute.OFFER} exact>
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
