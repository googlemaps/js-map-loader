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
    divId: string,
    mapOptions: google.maps.MapOptions,
    apiOptions: MapsJSAPIOptions,
    append?: boolean
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

    async initMap(options: MapLoaderOptions): Promise<google.maps.Map<Element>> {        
        try {
            const loader: Loader = new Loader({
                apiKey: options.apiKey,
                version: options.apiOptions.version,
                libraries: options.apiOptions.libraries
              });
            // Load the Maps JS API
            await loader.load();
            // Get the div to load the map into
            let map_div:Element = document.getElementById(options.divId);
            if (options.append) {
                let append_div_id:string = 'google_map';
                let append_div:Element = document.createElement('div');
                append_div.setAttribute('id', append_div_id);
                map_div.appendChild(append_div);
                map_div = append_div;
            }
            // Initialize the map
            console.log(map_div)
            return await new google.maps.Map(map_div, options.mapOptions);
        } catch(e) {
            console.log(e);
        }
    }
}