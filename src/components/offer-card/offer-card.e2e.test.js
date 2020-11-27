import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {fullOfferAdaptedToClient as offer} from "../../__mocks__/data/offer";

configure({adapter: new Adapter()});

describe(`should call callback when iteractive was`, () => {

  it(`should call callback when card was mouseenter event`, () => {
    const handleMouseEvent = jest.fn();

    const component = shallow(
        <OfferCard
          offer={offer}
          className="near-places__card"
          classNameInner="near-places__image-wrapper"
          onChangeActiveOffer={handleMouseEvent}
          onChangeFavorite={()=>{}}
          width="100px"
          height="100px"
        />
    );
    component.simulate(`mouseenter`);
    expect(handleMouseEvent).toHaveBeenCalledTimes(1);
    expect(handleMouseEvent.mock.calls[0][0]).toBe(offer.id);
  });

  it(`should call callback when card was mouseleave enter`, () => {
    const handleMouseLeave = jest.fn();

    const component = shallow(
        <OfferCard
          offer={offer}
          className="near-places__card"
          classNameInner="near-places__image-wrapper"
          onChangeActiveOffer={handleMouseLeave}
          onChangeFavorite={()=>{}}
          width="100px"
          height="100px"
        />
    );
    component.simulate(`mouseleave`);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
    expect(handleMouseLeave.mock.calls[0][0]).toBe(null);
  });

  it(`should call callback when button favorite was clicked`, () => {
    const handleBtnlick = jest.fn();

    const component = shallow(
        <OfferCard
          offer={offer}
          className="near-places__card"
          classNameInner="near-places__image-wrapper"
          onChangeActiveOffer={()=>{}}
          onChangeFavorite={handleBtnlick}
          width="100px"
          height="100px"
        />
    );
    const btn = component.find(`.place-card__bookmark-button`);
    btn.simulate(`click`);
    expect(handleBtnlick).toHaveBeenCalledTimes(1);
    expect(handleBtnlick.mock.calls[0][0]).toBe(offer.id);
  });
});
