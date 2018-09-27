/* global mapboxgl */

// Replace this with your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZWJyZWxzZm9yZCIsImEiOiI2VFFWT21ZIn0.qhtAhoVTOPzFwWAi7YHr_Q';

// Initialize the map with its settings
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ebrelsford/cjmh56y2b2zlu2rs0vbxvfcew',
  center: [-71.020000, 42.362400],
  zoom: 10.0
});