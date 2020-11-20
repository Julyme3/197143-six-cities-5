import React, {useCallback} from "react";
import OfferList from "../offer-list/offer-list";
import {OffersType} from '../../types';
import {connect} from "react-redux";
import {fetchOffersListAction, postFavoriteAction} from "../../store/api-actions";
import PropTypes from "prop-types";

const OfferListMain = (props) => {
  const {fetchOffers, offers, postFavorite} = props;
  const handleChangeFavorite = useCallback((id, isFavorite) => {
    postFavorite(id, isFavorite, fetchOffers);
  }, [offers]);

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
  fetchOffers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite(id, status, action) {
    dispatch(postFavoriteAction(id, status, action));
  },
  fetchOffers() {
    dispatch(fetchOffersListAction());
  }
});

export {OfferListMain};
export default connect(null, mapDispatchToProps)(OfferListMain);
