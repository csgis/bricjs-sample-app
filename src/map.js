var L = require('leaflet');

function bricjs(opts) {
  return L.map(opts.parent, opts.vendorOptions);
}

module.exports = bricjs;
