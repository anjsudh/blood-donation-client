/**
 * Created by anjana-2492 on 7/15/2017.
 */
import React from 'react';
import { Map, Widgets, Popup} from 'react-arcgis';
import ReactDOMServer from 'react-dom/server';
import FormPage from './Form';
import {addDonor} from "../action_creators/action_creater_donor";
import "./map.css"
const SearchWidget = Widgets.Search;
class MapComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMapLoad(map, view) {
        console.log(view);
        view.popup.actions.removeAll();
        view.popup.actions.push({
            title: "Register to Donate",
            id: "submit-button"
        });
        view.popup.on("trigger-action", function(event){
            if(event.action.id === "submit-button"){

                let formData = new FormData(document.donorDetails);
                console.log(formData);
                let donor = {};
                for (let entry of formData.entries())
                {
                    donor[entry[0]] = entry[1];
                }
                donor['coordinates']={type: "Point",  coordinates: [view.popup.location.latitude, view.popup.location.longitude]}
                console.log(view.popup.location)
                donor = '{"donor":'+JSON.stringify(donor)+'}';
                console.log(donor);
                addDonor(donor)
            }
        });

    }

    handleClick(e){
        console.log(e);
    }

    render() {
        return (
            <Map
                onLoad={this.handleMapLoad}
                style={{width: '99vw', height: '99vh'}}
                viewProperties={{center: [-122.4443,47.2529], zoom: 6}}
                onClick={this.handleClick.bind(this)}
            >
                <SearchWidget position="top-right"/>
                <Widgets.Locate position="top-right" goToLocationEnabled="true"/>
                <Popup
                    popupProperties={{
                        content: ReactDOMServer.renderToString(<FormPage/>),
                        location: [-122.4443, 47.2529],
                        title: 'Let patients know your location! Register Now!'
                    }}
                />

            </Map>
        );
    }
}

export default MapComponent;