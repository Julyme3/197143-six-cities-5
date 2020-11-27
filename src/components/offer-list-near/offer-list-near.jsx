import React, {useCallback} from "react";
import OfferList from "../offer-list/offer-list";
import {OffersType} from "../../types";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {postFavoriteAction} from "../../store/api-actions";
import {updateFavoriteNearbyAction} from "../../store/actions";

const OfferListNear = (props) => {
  const {postFavorite, updateFavoriteNearby} = props;

  const handleChangeFavorite = useCallback((id, isFavorite) => {
    postFavorite(id, isFavorite, updateFavoriteNearby, `near`);
  }, [props.offers]);

  return (
    <OfferList
      className={`near-places__list places__list`}
      onChangeFavorite={handleChangeFavorite}
      onChangeActiveOffer={props.onChangeActiveItem}
      {...props}
    />
  );
};

OfferListNear.propTypes = {
  offers: OffersType,
  postFavorite: PropTypes.func.isRequired,
  updateFavoriteNearby: PropTypes.func.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite(id, status, action, type) {
    dispatch(postFavoriteAction(id, status, action, type));
  },
  updateFavoriteNearby(data) {
    dispatch(updateFavoriteNearbyAction(data));
  }
});

export {OfferListNear};
export default connect(null, mapDispatchToProps)(OfferListNear);
