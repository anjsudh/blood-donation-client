/**
 * Created by anjana-2492 on 7/15/2017.
 */
import React from 'react';
import { Map, Widgets, Popup } from 'react-arcgis';
import ReactDOMServer from 'react-dom/server';
import FormPage from './Form';
import "./map.css"
const SearchWidget = Widgets.Search;
const MapComponent = (props) => {
    return(
        <Map
            style={{ width: '100vw', height: '100vh' }}
             viewProperties={{center: [-122.4443, 47.2529],zoom: 6}}
        >
                <SearchWidget position="top-right"/>
                <Popup
                    popupProperties={{
                        content: ''+ReactDOMServer.renderToStaticMarkup(<FormPage/>),
                        location: [-122.4443, 47.2529],
                        title: 'My Popup'
                    }}
                />

        </Map>
    );
}
export default MapComponent;