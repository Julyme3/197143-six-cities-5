import React, {memo} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAuthorizationStatusSelector} from "../../store/reducers/user/selectors";
import {AuthorizationStatus} from "../../const";

const userEmail = `Oliver.conner@gmail.com`;
const Header = ({authorizationStatus}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link" to="/">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {authorizationStatus === AuthorizationStatus.AUTH ?
                <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {userEmail}
                  </span>
                </Link>
                :
                <Link className="header__nav-link header__nav-link--profile" to="/login">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state),
});

export {Header};

export default memo(connect(mapStateToProps)(Header));
