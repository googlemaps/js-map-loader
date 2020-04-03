/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GoogleMap } from 'map-loader';

/*
 * Set your API key here.
 * For more information on generating API keys,
 * see https://goo.gle/gmp-generate-api-key-video
 */
const GOOGLE_MAPS_API_KEY = "YOUR API KEY";

/*
 * Options for how the map should initially render.
 * For more information on available options,
 * see https://goo.gle/maps-js-api-map-options
 */
const map_options = {
  center: {
    lat: 47.649196,
    lng: -122.350384
  },
  zoom: 12
}

/*
 * Options for loading the Maps JS API.
 */
const api_options = {
  version: 'weekly',
  libraries: ['places']
}

/*
 * Set ID of the div where the map will be loaded,
 * and whether to append to that div.
 */
const mapLoaderOptions = {
  apiKey: GOOGLE_MAPS_API_KEY,
  divId: 'google_map',
  append: true, // Appends to divId. Set to false to init in divId.
  mapOptions: mapOptions,
  apiOptions: apiOptions
};

// Instantiate map loader
const MapLoader = new GoogleMap();

// Load the map
MapLoader
  .initMap(mapLoaderOptions)
  .then(googleMap => {
    // returns instance of google.maps.Map
  });
