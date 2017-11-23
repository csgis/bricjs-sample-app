export default {
  'map': {
    'vendorOptions': {
      'center': [51.505, -0.09],
      'zoom': 13
    }
  },
  'layers': [{
    'id': 'mapbox.streets',
    'url': 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'attribution': 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }]
};
