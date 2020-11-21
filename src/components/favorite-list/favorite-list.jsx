import React, {useCallback} from "react";
import PropTypes from "prop-types";
import OfferCardFavorite from "../offer-card-favorite/offer-card-favorite";
import {fetchFavoritesAction, postFavoriteAction} from "../../store/api-actions";
import {connect} from "react-redux";


const FavoriteList = (props) => {
  const {list, fetchOffers, postFavorite} = props;
  const handleChangeFavorite = useCallback((id, isFavorite) => {
    postFavorite(id, isFavorite, fetchOffers);
  }, [list]);

  console.log(list);
  return (
    list.length && <div className="favorites__places">
      {list.map((offer) => {
        return (
          <OfferCardFavorite
            key={offer.id}
            offer={offer}
            onChangeFavorite={handleChangeFavorite}
          />
        );
      })}
    </div>
  );
};

FavoriteList.propTypes = {
 // offers: OffersType,
  postFavorite: PropTypes.func.isRequired,
  fetchOffers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite(id, status, action) {
    dispatch(postFavoriteAction(id, status, action));
  },
  fetchOffers() {
    dispatch(fetchFavoritesAction());
  }
});

export {FavoriteList};
export default connect(null, mapDispatchToProps)(FavoriteList);
