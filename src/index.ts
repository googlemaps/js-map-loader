/**
 * Copyright 2020 Google LLC
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