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

/// <reference types="@types/jest" />
/* eslint-disable @typescript-eslint/no-explicit-any */

import {GoogleMap} from "./map-loader";
import {MapLoaderOptions, MapsJSAPIOptions} from "../dist/map-loader";

const GOOGLE_MAPS_API_KEY: string = process.env.GOOGLE_MAPS_API_KEY;
const mapOptions: google.maps.MapOptions = {
  center: {
    lat: 47.649196,
    lng: -122.350384
  },
  zoom: 12
};
const apiOptions: MapsJSAPIOptions = {
  version: 'weekly',
  libraries: ['places']
};
const options: MapLoaderOptions = {
  apiKey: GOOGLE_MAPS_API_KEY,
  divId: 'map',
  mapOptions: mapOptions,
  apiOptions: apiOptions
};

function tileload_callback(): void {
  console.log('tiles loaded');
}

beforeEach(() => {
  document.body.innerHTML =
    '<div id="map"></div>';
});

test("initMap initializes instance of google.maps.Map", () => {
  const map: GoogleMap = new GoogleMap();
  map
    .initMap(options)
    .then((map: google.maps.Map) => {
      map.addListener('tilesloaded', tileload_callback);
      expect(tileload_callback).toBeCalled();
    });
});

test("initMap initializes appends instance of google.maps.Map", () => {
  const append_options: MapLoaderOptions = options;
  append_options.append = true;
  const map: GoogleMap = new GoogleMap();
  map
    .initMap(options)
    .then((map: google.maps.Map) => {
      map.addListener('tilesloaded', tileload_callback);
      expect(tileload_callback).toBeCalled();
    });
});
