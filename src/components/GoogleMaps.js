import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={
            {
                lat: this.props.lat,
                lng: this.props.lng
            }
            }
        >
            <Marker/>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAFhViEbvEh-VK4nq82EWmwcLFVk8Amwo4'
})(MapContainer);