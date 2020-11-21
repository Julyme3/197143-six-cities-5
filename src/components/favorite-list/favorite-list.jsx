import React, {useCallback} from "react";
import PropTypes from "prop-types";
import OfferCardFavorite from "../offer-card-favorite/offer-card-favorite";
import {postFavoriteAction} from "../../store/api-actions";
import {connect} from "react-redux";
import {updateFavoriteInListAction} from "../../store/actions";
import {OffersType} from "../../types";

const FavoriteList = (props) => {
  const {list, updateFavorite, postFavorite, onChangeActiveItem} = props;

  const handleChangeFavorite = useCallback((id, isFavorite) => {
    postFavorite(id, isFavorite, updateFavorite);
  }, [list]);

  return (
    list.length ? <div className="favorites__places">
      {list.map((offer) => {
        return (
          <OfferCardFavorite
            key={offer.id}
            offer={offer}
            onChangeFavorite={handleChangeFavorite}
            onChangeActiveOffer={onChangeActiveItem}
          />
        );
      })}
    </div>
      : null
  );
};

FavoriteList.propTypes = {
  list: OffersType,
  postFavorite: PropTypes.func.isRequired,
  updateFavorite: PropTypes.func.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite(id, status, action) {
    dispatch(postFavoriteAction(id, status, action));
  },
  updateFavorite(data) {
    dispatch(updateFavoriteInListAction(data));
  },
});

export {FavoriteList};
export default connect(null, mapDispatchToProps)(FavoriteList);
