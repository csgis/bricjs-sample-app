import 'leaflet/dist/leaflet.css';

import bricjs from '@csgis/bricjs-loader';
import config from './config.js';
import app from './app.json';

export { config };
export let run = () => bricjs(config, app.modules, app.deps);
