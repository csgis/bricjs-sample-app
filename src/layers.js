var L = require('leaflet');

function bricjs(opts, map) {
  opts.forEach(function (l) {
    L.tileLayer(l.url, {
      id: l.id,
      attribution: l.attribution
    }).addTo(map);
  });
}

module.exports = bricjs;
