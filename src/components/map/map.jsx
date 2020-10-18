import React, {PureComponent} from "react";
import {OffersType} from "../../types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const city = [52.38333, 4.9];
const ZOOM = 12;
const MARKER_URL = `img/pin.svg`;

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this._map.remove();
    this.init();
  }

  init() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: MARKER_URL,
      iconSize: [30, 30]
    });

    this._map = leaflet.map(`map`, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    const offerCords = [...offers.map((offer) => offer.coords), city];

    offerCords.forEach((offer) => {
      const offerCoord = [offer[0], offer[1]];

      leaflet
        .marker(offerCoord, {icon})
        .addTo(this._map);
    });
  }

  render() {
    return (
      <div id="map" style={{width: `512px`, height: `752px`}}></div>
    );
  }
}

Map.propTypes = {
  offers: OffersType
};

export default Map;
