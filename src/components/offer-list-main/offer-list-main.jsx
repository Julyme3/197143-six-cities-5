import React, {PureComponent} from "react";
import OfferList from "../offer-list/offer-list";
import {OffersType} from '../../types';

class OfferListMain extends PureComponent {
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
    return (
      <OfferList
        className={`cities__places-list places__list tabs__content`}
        handleCardHover={this.toggleActiveCard}
        {...this.props}
      />
    );
  }
}

OfferListMain.propTypes = {
  offers: OffersType,
};

export default OfferListMain;
