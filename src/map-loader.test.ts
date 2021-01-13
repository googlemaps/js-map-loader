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
import {initialize} from "@googlemaps/jest-mocks";
jest.mock('@googlemaps/js-api-loader');

const GoogleMapsAPIKey: string = process.env.GOOGLE_MAPS_API_KEY;
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
  apiKey: GoogleMapsAPIKey,
  divId: 'map',
  mapOptions: mapOptions,
  apiOptions: apiOptions
};

const map: GoogleMap = new GoogleMap();

beforeEach(() => {
  initialize();
  document.body.innerHTML =
    '<div id="map"></div>';
});

test("loadJSAPI resolves", async () => {
  const load = await (map as any).loadJSAPI(options);
  expect(load).toBeUndefined();
});

test("initMap initializes instance of google.maps.Map", async () => {
  const googleMap = await map.initMap(options);
  expect(typeof googleMap).toEqual('object');

  const appendOptions: MapLoaderOptions = options;
  appendOptions.append = true;
  const googleMapAppended = await map.initMap(appendOptions);
  expect(typeof googleMapAppended).toEqual('object');
});

test("initMap initializes instance of google.maps.Map when apiOptions is null", () => {
  const noApiOptions = options;
  delete noApiOptions.apiOptions;
  const googleMap = map.initMap(noApiOptions);
  expect(googleMap).resolves;
});

test("appendMapDiv appends a div with id = google_map_appended", () => {
  const mapDiv: Element = document.getElementById(options.divId);
  console.log(mapDiv)
  console.log(options.divId)
  const appendDiv = (map as any).appendMapDiv(mapDiv);
  expect(appendDiv.id).toEqual('google_map_appended');
});

test("initMap fails when invalid div id is provided", () => {
  const invalidOptions: MapLoaderOptions = options;
  invalidOptions.divId = 'invalid';
  expect(map.initMap(options)).rejects;
});

test("initMap fails when invalid API key is provided", () => {
  const invalidOptions: MapLoaderOptions = options;
  invalidOptions.apiKey = 'invalid';

  expect(map.initMap(options)).rejects;
});
