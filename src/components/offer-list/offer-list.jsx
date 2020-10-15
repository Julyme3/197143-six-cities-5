import React, {PureComponent} from "react";
import OfferCard from "../offer-card/offer-card";
import {OffersType} from '../../types';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.toggleActiveCard = this.toggleActiveCard.bind(this);
  }

  toggleActiveCard(activeCard) {
    this.setState({
      activeCard
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.length && offers.map((offer) => {
          return (
            <OfferCard
              key={offer.id}
              offer={offer}
              handleCardHover={this.toggleActiveCard}
            />
          );
        })}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: OffersType,
};

export default OfferList;
