import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {OffersType} from "../../types";
import PropTypes from "prop-types";
import Footer from "../footer/footer";
import MainLayout from "../../layouts/main-layout/main-layout";
import {connect} from "react-redux";
import {fetchFavoritesAction} from "../../store/api-actions";
import {getFavorites} from "../../store/reducers/favorites/selectors";
import FavoriteList from "../favorite-list/favorite-list";

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavorite();
  }

  render() {
    const {favoriteOffers} = this.props;
    return (
      <>
        <MainLayout
          classNameWrap="page__main--favorites"
        >
          {Object.keys(favoriteOffers).length && <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.keys(favoriteOffers)
                  .map((city) => {
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link" to="/">
                              <span>{city}</span>
                            </Link>
                          </div>
                        </div>
                        <FavoriteList list={favoriteOffers[city]} />
                      </li>
                    );
                  })}
              </ul>
            </section>

          </div>
          }
        </MainLayout>
        <Footer />
      </>
    );
  }
}

FavoritesScreen.propTypes = {
  fetchFavorite: PropTypes.func.isRequired,
 // favoriteOffers: PropTypes.array,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorite() {
    dispatch(fetchFavoritesAction());
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
