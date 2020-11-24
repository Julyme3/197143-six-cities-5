const leaflet = jest.genMockFromModule(`leaflet`);
leaflet.icon = () => {};
leaflet.map = () => {
  return {
    setView: () => {},
    remove: () => {},
  };
};
leaflet.marker = () => {
  return {
    addTo: () => {},
  };
};
leaflet.tileLayer = () => {
  return {
    addTo: () => {},
  };
};
leaflet.Icon.extend = (options) => {
  return {
    function() {
      this.options = options;
      return this;
    },
  };
};
module.exports = leaflet;
