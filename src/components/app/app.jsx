import React from "react";
import {Router as BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {OffersType, ReviewsType} from "../../types";
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus} from "../../const";
import browserHistory from "../../browser-history";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import RoomScreen from "../room-screen/room-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import PrivateRoute from "../private-route/private-route";
import {getAuthorizationStatusSelector} from "../../store/reducers/user/selectors";
import {connect} from "react-redux";

const MainScreenWrapped = withActiveItem(MainScreen);
const App = (props) => {

  const {offers, reviews, authorizationStatus} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <MainScreenWrapped />
        </Route>
        <Route path={AppRoute.LOGIN} exact
          render={() => {
            return (
              authorizationStatus === AuthorizationStatus.AUTH ?
                <Redirect to={AppRoute.ROOT} />
                :
                <AuthScreen />
            );
          }}
        >
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => {
          return (
            <FavoritesScreen
              offers={offers}
            />
          );
        }} />
        <Route path={AppRoute.OFFER} exact render={({match}) => {
          return (
            <RoomScreen
              match={match}
              offer={offers[0]}
              reviews={reviews}
            />
          );
        }} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state),
});

App.propTypes = {
  offers: OffersType,
  reviews: ReviewsType,
  authorizationStatus: PropTypes.string.isRequired,
};

export {App};

export default connect(mapStateToProps)(App);
