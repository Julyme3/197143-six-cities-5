import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {OfferType, ReviewsType, OffersType} from "../../types";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../const";
import {
  fetchCommentsAction,
  fetchFullOfferAction,
  fetchNearbyOffersAction,
  postCommentAction,
  postFavoriteAction,
} from "../../store/api-actions";
import withForm from "../../hocs/with-form/with-form";
import ReviewForm from "../review-form/review-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import OfferListNear from "../offer-list-near/offer-list-near";
import MainLayout from "../../layouts/main-layout/main-layout";
import {
  getActiveOfferSelector,
  getCommentsSelector,
  getNearbyOffersSliceSelector,
} from "../../store/reducers/offer-data/selectors";
import Rating from "../rating/rating";
import {getAuthorizationStatusSelector} from "../../store/reducers/user/selectors";
import {setActiveOfferAction, setStartLoadingAction} from "../../store/actions";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getIsLoading, getPostCommentStatus} from "../../store/reducers/process/selectors";

const MAX_COUNT_IMG = 6;
const ReviewFormWrapped = withForm(ReviewForm);
const OfferListNearWrapped = withActiveItem(OfferListNear);
class RoomScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.handleChangeFavorite = this.handleChangeFavorite.bind(this);
  }

  componentDidMount() {
    const {fetchFullOffer, fetchNearbyOffers, fetchComments} = this.props;
    fetchFullOffer(this.id);
    fetchComments(this.id);
    fetchNearbyOffers(this.id);
  }

  handleChangeFavorite() {
    const {postFavorite, activeOffer, setActiveOffer} = this.props;
    const isFavoriteToNumber = Number(!activeOffer.isBookmark);
    postFavorite(activeOffer.id, isFavoriteToNumber, setActiveOffer);
  }

  render() {
    const {activeOffer: offer,
      reviews,
      nearbyOffers,
      authorizationStatus,
      postComment,
      commentStatus,
      setStartLoading,
      isLoadingComment} = this.props;
    const isLoading = !offer;

    if (!offer) {
      return null;
    }
    const {details, user, isPremium, name, type, price, raiting, isBookmark} = offer;
    let {src} = offer;
    src = src.slice(0, MAX_COUNT_IMG);

    return (
      <MainLayout
        classNameWrap="page__main--property"
      >
        {!isLoading &&
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {src.map((srcItem, i) => {
                  return (
                    <div
                      key={`${i}-${srcItem}`}
                      className="property__image-wrapper"
                    >
                      <img className="property__image" src={srcItem} alt="Photo studio"/>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {name}
                  </h1>
                  <button
                    className={`property__bookmark-button button
                      ${isBookmark && `property__bookmark-button--active` || ``}`
                    }
                    type="button"
                    onClick={this.handleChangeFavorite}
                  >
                    <svg className="place-card__bookmark-icon property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <Rating rating={raiting} className="property__stars" />
                  <span className="property__rating-value rating__value">{raiting}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {details.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {details.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title"></h2>
                  <ul className="property__inside-list">
                    {details.insideItems.map((insideItem, i) => {
                      return (
                        <li
                          key={`${i}-${insideItem}`}
                          className="property__inside-item">
                          {insideItem}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={user.src} width="74" height="74"
                        alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {user.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {details.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews ·
                    <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewsList reviews={reviews}/>
                  {authorizationStatus === AuthorizationStatus.AUTH &&
                    <ReviewFormWrapped
                      id={this.id}
                      commentPostAction={postComment}
                      isLoading={isLoadingComment}
                      commentStatus={commentStatus}
                      setStartLoading={setStartLoading}
                    />
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={[...nearbyOffers, offer]}
                width={`100%`}
                height={`579px`}
                cityCoords={offer.city.location}
                zoom={offer.city.zoom}
                activeCardId={+this.id}
              />
            </section>
          </section> || null
        }
        {nearbyOffers.length && <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferListNearWrapped
              offers={nearbyOffers}
            />
          </section>
        </div> || null
        }
      </MainLayout>
    );
  }
}

RoomScreen.propTypes = {
  activeOffer: OfferType,
  reviews: ReviewsType,
  nearbyOffers: OffersType,
  fetchFullOffer: PropTypes.func.isRequired,
  fetchNearbyOffers: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  postComment: PropTypes.func,
  match: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  postFavorite: PropTypes.func.isRequired,
  setActiveOffer: PropTypes.func.isRequired,
  setStartLoading: PropTypes.func,
  isLoadingComment: PropTypes.bool,
  commentStatus: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOfferSelector(state),
  nearbyOffers: getNearbyOffersSliceSelector(state),
  authorizationStatus: getAuthorizationStatusSelector(state),
  reviews: getCommentsSelector(state),
  isLoadingComment: getIsLoading(state),
  commentStatus: getPostCommentStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFullOffer(id) {
    dispatch(fetchFullOfferAction(id));
  },
  fetchNearbyOffers(id) {
    dispatch(fetchNearbyOffersAction(id));
  },
  postComment(id, data) {
    dispatch(postCommentAction(id, data));
  },
  fetchComments(id) {
    dispatch(fetchCommentsAction(id));
  },
  postFavorite(id, status, action) {
    dispatch(postFavoriteAction(id, status, action));
  },
  setActiveOffer(data) {
    dispatch(setActiveOfferAction(data));
  },
  setStartLoading(data) {
    dispatch(setStartLoadingAction(data));
  },
});

export {RoomScreen};

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
