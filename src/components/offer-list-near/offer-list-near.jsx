import React, {useCallback} from "react";
import OfferList from "../offer-list/offer-list";
import {OffersType} from "../../types";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchNearbyOffersAction, postFavoriteAction} from "../../store/api-actions";

const OfferListNear = (props) => {
  const {fetchNearOffers, offers, postFavorite} = props;
  const handleChangeFavorite = useCallback((id, isFavorite) => {
    postFavorite(id, isFavorite, fetchNearOffers);
  }, [offers]);

  return (
    <OfferList
      className={`near-places__list places__list`}
      onChangeFavorite={handleChangeFavorite}
      {...props}
    />
  );
};

OfferListNear.propTypes = {
  offers: OffersType,
  postFavorite: PropTypes.func.isRequired,
  fetchNearOffers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite(id, status, action) {
    dispatch(postFavoriteAction(id, status, action));
  },
  fetchNearOffers(data, id) {
    dispatch(fetchNearbyOffersAction(data, id));
  }
});

export {OfferListNear};
export default connect(null, mapDispatchToProps)(OfferListNear);
