Map Loader for Google Maps Platform JavaScript API v3
==================================

## Description
Automatically loads a Google map into your website with a few lines of JavaScript or TypeScript. You provide the ID of the div where you want the map initialized or appended to, your settings for what the map looks like, and optionally your settings for loading the Maps JS API, and this module handles the rest.

Loading of the Google Maps Platform JavaScript API is taken care of for you asynchronously courteousy of [@googlemaps/loader](https://www.npmjs.com/package/@googlemaps/loader).

## NPM

Available via NPM as the package `@googlemaps/map-loader`

## Example

### Set map loader options
``` javascript
import { GoogleMap } from 'map-loader';

const GOOGLE_MAPS_API_KEY = "YOUR API KEY";

/* Options for how the map should initially render. */
const map_options = {
  center: {
    lat: 47.649196,
    lng: -122.350384
  },
  zoom: 12
}

/* Options for loading the Maps JS API. */
const api_options = {
  version: 'weekly',
  libraries: ['places']
}

/*
 * Set ID of the div where the map will be loaded,
 * and whether to append to that div.
 */
const map_loader_options = {
  apiKey: GOOGLE_MAPS_API_KEY,
  divId: 'google_map',
  append: true, // Appends to divId. Set to false to init in divId.
  mapOptions: map_options,
  apiOptions: api_options
};
```
### Load the map:
``` javascript
// Instantiate map loader
const MapLoader = new GoogleMap();

// Load the map
MapLoader
  .initMap(map_loader_options)
  .then((google_map) => {
    // returns instance of google.maps.Map
  });
```

### Or if you like, with async/await
``` javascript
// Instantiate map loader
const MapLoader = new GoogleMap();

// Load the map
const await google_map = MapLoader.initMap(map_loader_options);
```

## Documentation

If you're using TypeScript, the map loader exports interfaces for `MapLoaderOptions` and `MapsJSAPIOptions`. Options for base map settings are provided courteousy of google.maps.MapOptions in [@types/googlemaps](https://www.npmjs.com/package/@types/googlemaps).


### MapLoaderOptions

| Property | Type | Description |
| -------- | ---- | ----------- |
| apiKey | string | Your API key. For information on generating an API key, see [How to generate and restrict API keys for Google Maps Platform](https://youtu.be/2_HZObVbe-g). |
| divId | string | The ID of the div where you want the map initialized or appended. |
| mapOptions | google.maps.MapOptions | Settings for how the map should appear. For a complete list of map options, see [google.maps.MapOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/googlemaps/index.d.ts#L479) |
| apiOptions | MapsJSAPIOptions | Setting for loading the Maps JavaScriptAPI. For a complete list of API options, see [MapsJSAPIOptions] |
| append | boolean | *Optional.* Defaults to false. Sets whether to initialize the map in or append to `divId`. |

### MapsJSAPIOptions

|| Property || Type || Description ||


## Support

This library is community supported. We're comfortable enough with the stability and features of
the library that we want you to build real production applications on it.

If you find a bug, or have a feature suggestion, please [log an issue][issues]. If you'd like to
contribute, please read [How to Contribute][contrib].

[issues]: https://github.com/googlemaps/js-map-loader
[contrib]: https://github.com/googlemaps/js-map-loader/blob/master/CONTRIB.md
