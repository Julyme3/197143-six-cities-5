import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus, AppRoute} from "../../const";
import {getAuthorizationStatusSelector} from "../../store/reducers/user/selectors";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = (props) => {
  const {authorizationStatus, exact, path, render} = props;
  return (
    <Route exact={exact} path={path} render={(routeComponent) => {
      return (
        authorizationStatus === AuthorizationStatus.AUTH ?
          render(routeComponent)
          :
          <Redirect to={AppRoute.LOGIN} />
      );
    }} />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state),
});

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};

export default connect(mapStateToProps)(PrivateRoute);
