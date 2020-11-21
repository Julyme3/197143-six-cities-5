import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {FavoriteOffers} from "../../types";
import PropTypes from "prop-types";
import Footer from "../footer/footer";
import MainLayout from "../../layouts/main-layout/main-layout";
import {connect} from "react-redux";
import {fetchFavoritesAction} from "../../store/api-actions";
import {getFavorites, getIsLoading} from "../../store/reducers/favorites/selectors";
import FavoriteList from "../favorite-list/favorite-list";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {setStartLoadingAction} from "../../store/actions";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const FavoriteListWrapped = withActiveItem(FavoriteList);
class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startLoading();
    this.props.fetchFavorite();
  }

  render() {
    const {favoriteOffers, isLoading} = this.props;
    const isEmpty = Object.keys(favoriteOffers).length === 0 && !isLoading;
    return (
      <>
        <MainLayout
          classNameWrap={`page__main--favorites ${isEmpty && `page__main--favorites-empty` || ``}`}
          className={`${isEmpty && `page--favorites-empty` || ``}`}
        >
          {!isEmpty ?
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.keys(favoriteOffers)
                    .map((city) => {
                      return (
                        favoriteOffers[city].length ? <li className="favorites__locations-items" key={city}>
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <Link className="locations__item-link" to="/">
                                <span>{city}</span>
                              </Link>
                            </div>
                          </div>
                          <FavoriteListWrapped
                            list={favoriteOffers[city]}
                          />
                        </li>
                          : null
                      );
                    })}
                </ul>
              </section>
            </div>
            :
            <FavoritesEmpty />
          }
        </MainLayout>
        <Footer />
      </>
    );
  }
}

FavoritesScreen.propTypes = {
  fetchFavorite: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  startLoading: PropTypes.func,
  favoriteOffers: FavoriteOffers,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavorites(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorite() {
    dispatch(fetchFavoritesAction());
  },
  startLoading() {
    dispatch(setStartLoadingAction());
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
