import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {OfferType, ReviewsType, OffersType} from "../../types";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../const";
import {
  fetchCommentsAction,
  fetchFullOffer,
  fetchNearbyOffers,
  postCommentAction,
} from "../../store/api-actions";
import withForm from "../../hocs/with-form/with-form";
import ReviewForm from "../review-form/review-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import OfferListNear from "../offer-list-near/offer-list-near";
import MainLayout from "../../layouts/main-layout/main-layout";
import {
  getActiveOfferSelector, getCommentsSelector,
  getNearbyOffersSliceSelector,
} from "../../store/reducers/offer-data/selectors";
import Rating from "../rating/rating";
import {getAuthorizationStatusSelector} from "../../store/reducers/user/selectors";

const MAX_COUNT_IMG = 6;
const ReviewFormWrapped = withForm(ReviewForm);
class RoomScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    const {fetchFullOfferAction, fetchNearbyOffersAction, fetchComments} = this.props;
    fetchFullOfferAction(this.id);
    fetchComments(this.id);
    fetchNearbyOffersAction(this.id);
  }

  render() {
    const {activeOffer: offer, reviews, nearbyOffers, authorizationStatus, postComment} = this.props;
    const isLoading = !offer;

    if (!offer) {
      return null;
    }
    const {details, user, isPremium, name, type, price, raiting} = offer;
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
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
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
                    <ReviewFormWrapped id={this.id} commentPostAction={postComment} />
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
          </section>
        }
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferListNear
              offers={nearbyOffers}
            />
          </section>
        </div>
      </MainLayout>
    );
  }
}

RoomScreen.propTypes = {
  activeOffer: OfferType,
  reviews: ReviewsType,
  nearbyOffers: OffersType,
  fetchFullOfferAction: PropTypes.func.isRequired,
  fetchNearbyOffersAction: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  postComment: PropTypes.func,
  match: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOfferSelector(state),
  nearbyOffers: getNearbyOffersSliceSelector(state),
  authorizationStatus: getAuthorizationStatusSelector(state),
  reviews: getCommentsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFullOfferAction(id) {
    dispatch(fetchFullOffer(id));
  },
  fetchNearbyOffersAction(id) {
    dispatch(fetchNearbyOffers(id));
  },
  postComment(id, data) {
    dispatch(postCommentAction(id, data));
  },
  fetchComments(id) {
    dispatch(fetchCommentsAction(id));
  },
});

export {RoomScreen};

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
