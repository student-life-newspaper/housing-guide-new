import React from 'react';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

const locationPositions = {
  'All': {
    'coordinates': [38.648435, -90.307769],
    'zoom': 14,
  },
  'South 40': {
    'coordinates': [38.644432, -90.313888],
    'zoom': 16.5,
  },
  'Village': {
    'coordinates': [38.650777, -90.313331],
    'zoom': 17,
  },
  'Off Campus': {
    'coordinates': [38.652451, -90.300219],
    'zoom': 14,
  },
}

class SideMap extends React.Component {
  render() {
    const position = locationPositions[this.props.selectedLocation].coordinates;
    const zoom = locationPositions[this.props.selectedLocation].zoom;
    const id = 'ck9nkgte3058o1ip80xvsnybg';
    const accessToken = 'pk.eyJ1Ijoic3R1ZGVudGxpZmVuZXdzcGFwZXIiLCJhIjoiY2s5bmhrZTFzMDJjajNmbzd2eHpoc3BraCJ9.mfW3MvzjG6Rvch9CF1q-Sg';
    return (
      <Map
        center={position}
        zoom={zoom}
        style={{ width: '100%', height: '100%' }}
        className="mx-3 side-map"
      >
        <TileLayer
          attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
          maxZoom={20}
          tileSize={512}
          zoomOffset={-1}
          url={`https://api.mapbox.com/styles/v1/studentlifenewspaper/${id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
        />
      </Map>
    );
  }
}

export default SideMap;
