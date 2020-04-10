[![Build Status](https://travis-ci.org/googlemaps/v3-utility-library.svg?branch=master)](https://travis-ci.org/googlemaps/v3-utility-library)
[![codecov](https://codecov.io/gh/googlemaps/v3-utility-library/branch/master/graph/badge.svg)](https://codecov.io/gh/googlemaps/v3-utility-library)
![TypeScript](https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
![Apache-2.0](https://img.shields.io/badge/license-Apache-blue)

Map Loader for Google Maps Platform JavaScript API v3
==================================

## Description
Automatically loads a Google map into your website with a few lines of JavaScript or TypeScript. You provide the ID of the div where you want the map initialized or appended to, your settings for what the map looks like, and optionally your settings for loading the Maps JS API, and this module handles the rest.

Loading of the Google Maps Platform JavaScript API is taken care of for you asynchronously courteousy of [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader).

## NPM

Available via NPM as the package `@googlemaps/map-loader`

## Example

### Set map loader options
``` javascript
import { GoogleMap } from 'map-loader';

const googleMapsAPIKey = "YOUR API KEY";

/* Options for how the map should initially render. */
const mapOptions = {
  center: {
    lat: 47.649196,
    lng: -122.350384
  },
  zoom: 12
}

/* Options for loading the Maps JS API. */
const apiOptions = {
  version: 'weekly',
  libraries: ['places']
}

/*
 * Set ID of the div where the map will be loaded,
 * and whether to append to that div.
 */
const mapLoaderOptions = {
  apiKey: googleMapsAPIKey,
  divId: 'google_map',
  append: true, // Appends to divId. Set to false to init in divId.
  mapOptions: mapOptions,
  apiOptions: apiOptions
};
```
### Load the map:
``` javascript
// Instantiate map loader
const mapLoader = new GoogleMap();

// Load the map
mapLoader
  .initMap(mapLoaderOptions)
  .then(googleMap => {
    // returns instance of google.maps.Map
  });
```

### Or if you like, with async/await
``` javascript
// Instantiate map loader
const mapLoader = new GoogleMap();

// Load the map
const await googleMap = mapLoader.initMap(mapLoaderOptions);
```

## Documentation

If you're using TypeScript, the map loader exports interfaces for `MapLoaderOptions` and `MapsJSAPIOptions`. Options for base map settings are provided courteousy of google.maps.MapOptions in [@types/googlemaps](https://www.npmjs.com/package/@types/googlemaps).


### MapLoaderOptions

| Property | Type | Description |
| -------- | ---- | ----------- |
| apiKey | string | Your API key. For information on generating an API key, see [How to generate and restrict API keys for Google Maps Platform](https://youtu.be/2_HZObVbe-g). |
| divId | string | The ID of the div where you want the map initialized or appended. |
| mapOptions | [google.maps.MapOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/googlemaps/index.d.ts#L479) | Settings for how the map should appear. For a complete list of map options, see [google.maps.MapOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/googlemaps/index.d.ts#L479). |
| apiOptions | [MapsJSAPIOptions](#mapsjsapioptions) | Setting for loading the Maps JavaScriptAPI. For a complete list of API options, see [MapsJSAPIOptions](#mapsjsapioptions). |
| append | boolean | *Optional.* Defaults to false. Sets whether to initialize the map in or append to `divId`. |

### MapsJSAPIOptions

| Property | Type  | Description |
| -------- | ----- | ----------- |
| version | string | *Optional.* Defaults to `weekly`. Version of the Maps JS API to load. For more information on supported values, see [Release channels and version numbers](https://developers.google.com/maps/documentation/javascript/versions#release-channels-and-version-numbers). |
| libraries | Array<string> | *Optional.* Additional Maps JS API libraries to load. Supported values are `drawing`, `geometry`, `places`, `visualization`. |
| language | string | *Optional.* Defaults to `en`. The language code of the language to localize the map to. For more information on supported values, see [supported languages](https://developers.google.com/maps/faq#languagesupport). |
| region | string | *Optional.* Defaults to `us`. Sets the Unicode region subtag identifier of the region to localize the map to. For more information on supported values, see [Region localization](https://developers.google.com/maps/documentation/javascript/localization#Region). |

## Support

This library is community supported. We're comfortable enough with the stability and features of
the library that we want you to build real production applications on it.

If you find a bug, or have a feature suggestion, please [log an issue][issues]. If you'd like to
contribute, please read [How to Contribute][contrib].

[issues]: https://github.com/googlemaps/js-map-loader/issues
[contrib]: https://github.com/googlemaps/js-map-loader/blob/master/CONTRIBUTING.md
