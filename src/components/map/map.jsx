import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OffersType} from "../../types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";


const MARKER_URL = `img/pin.svg`;
const MARKER_ACTIVE_URL = `img/pin-active.svg`;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._markers = [];
    this._map = null;
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate({offers: prevOffers, cityCoords: prevCityCoords}) {
    this.removedMarkers(prevOffers);
    this.addMarkers(this.props.offers, this.props.activeCardId);
    if (this.props.cityCoords.join(`,`) !== prevCityCoords.join(`,`)) {
      this._map.setView(this.props.cityCoords, this.props.zoom);
    }
  }

  init() {
    const {offers, cityCoords, zoom} = this.props;
    this._map = leaflet.map(`map`, {
      center: cityCoords,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(cityCoords, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this.addMarkers(offers);
  }

  addMarkers(offers, activeCardId) {
    const LeftIcon = leaflet.Icon.extend({
      options: {
        iconSize: [30, 30],
      }
    });

    const icon = new LeftIcon({iconUrl: MARKER_URL});
    const activeIcon = new LeftIcon({iconUrl: MARKER_ACTIVE_URL});
    const offerCords = offers.map((offer) => offer.coords);
    const isActivePin = activeCardId ? activeCardId : null;

    offerCords.forEach((offer, i) => {
      const offerCoord = [offer[0], offer[1]];
      this._markers.push(leaflet
        .marker(offerCoord, {icon: offers[i].id === isActivePin ? activeIcon : icon})
        .addTo(this._map));
    });
  }

  removedMarkers(prevOffers) {
    prevOffers.forEach((offer, i) => this._markers[i].remove());
    this._markers = [];
  }

  render() {
    const {width, height} = this.props;
    return (
      <div id="map" style={{width, height}} />
    );
  }
}

Map.propTypes = {
  offers: OffersType,
  width: PropTypes.string,
  height: PropTypes.string,
  activeCardId: PropTypes.number,
  cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;
