import React from "react";
import OfferList from "../offer-list/offer-list";
import {OffersType} from '../../types';
import {connect} from "react-redux";
import {postFavoriteAction} from "../../store/api-actions";
import PropTypes from "prop-types";
import {updateFavoriteAction} from "../../store/actions";

const OfferListMain = (props) => {
  const {updateFavorite, postFavorite} = props;

  const handleChangeFavorite = (id, isFavorite) => {
    postFavorite(id, isFavorite, updateFavorite);
  };

  return (
    <OfferList
      className={`cities__places-list places__list tabs__content`}
      onChangeFavorite={handleChangeFavorite}
      {...props}
    />
  );
};

OfferListMain.propTypes = {
  offers: OffersType,
  postFavorite: PropTypes.func.isRequired,
  updateFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite(id, status, action) {
    dispatch(postFavoriteAction(id, status, action));
  },
  updateFavorite(data) {
    dispatch(updateFavoriteAction(data));
  }
});

export {OfferListMain};
export default connect(null, mapDispatchToProps)(OfferListMain);
