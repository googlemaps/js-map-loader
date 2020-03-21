import { Loader } from '@googlemaps/loader';
 

export interface MapLoaderOptions {
    apiKey: string,
    mapDiv: string,
    mapOptions: google.maps.MapOptions,
    apiOptions: MapsJSAPIOptions
}

export interface MapsJSAPIOptions {
  version?: string;
  libraries?: string[];
  channel?: string;
  language?: string;
  clientId?: string;
  region?: string;
}

export class GoogleMap {

    constructor() {
    }

    async initMap(settings: MapLoaderOptions) {
        const loader:Loader = new Loader({
            apiKey: settings.apiKey,
            version: settings.apiOptions.version,
            libraries: settings.apiOptions.libraries
          });
        // Get the div to render the map into
        try {
            // Load the Maps JS API
            await loader.load();
            // Get the div to load the map into
            const map_div:Element = document.getElementById(settings.mapDiv);
            // Initialize the map
            return await new google.maps.Map(map_div, settings.mapOptions);
        } catch(e) {
            console.log(e);
        }
    }
}