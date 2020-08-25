import React from 'react';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

// https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const mapBounds = [
  [38.633863, -90.325649],
  [38.662028, -90.288587]
];

const locationPositions = {
  All: {
    'coordinates': [38.648435, -90.307769],
    'zoom': 14.5,
  },
  'South 40': {
    'coordinates': [38.644432, -90.313888],
    'zoom': 16.5,
  },
  Village: {
    'coordinates': [38.650777, -90.313331],
    'zoom': 17,
  },
  'Off Campus': {
    'coordinates': [38.652451, -90.300219],
    'zoom': 14,
  },
}

class SideMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: null,
    };
    this.getMarkers = this.getMarkers.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.getMarkers(this.props.data);
    }
  }
  
  componentDidMount(){
    this.getMarkers(this.props.data);
  }
  
  getMarkers(data) {
    let markers = [];
    for (let dorm in data) {
      if(data[dorm].hasOwnProperty('coordinates')){
        const position = data[dorm]['coordinates'].split(', ');
        if ((position.length % 2) === 0) {
          const latArray = [];
          const longArray = [];
          for (let i = 0; i < position.length; ++i) {
            if ((i % 2) === 0) latArray.push(position[i]);
            else longArray.push(position[i]);
          }
          for (let i = 0; i < latArray.length; ++i) {
            markers.push(
              <Marker position={[latArray[i], longArray[i]]} key={latArray[i]}>
                <Popup><span style={{cursor: 'pointer'}} onClick={() => this.props.selectDorm(data[dorm])}>{data[dorm]['name']}</span></Popup>
              </Marker>
            );
          }
        } else {
          console.error('Invalid coordinates for current dorm');          
        }
      }
    }
    this.setState({ markers: markers });
  }
  
  render() {
    const position = locationPositions[this.props.selectedLocation].coordinates;
    const zoom = locationPositions[this.props.selectedLocation].zoom;
    const id = 'ck9nkgte3058o1ip80xvsnybg';
    const accessToken = 'pk.eyJ1Ijoic3R1ZGVudGxpZmVuZXdzcGFwZXIiLCJhIjoiY2s5bmhrZTFzMDJjajNmbzd2eHpoc3BraCJ9.mfW3MvzjG6Rvch9CF1q-Sg';
    const markers = this.state.markers;
    return (
      <Map
        center={position}
        zoom={zoom}
        style={{ width: '100%', height: '100%' }}
        className="mx-3 side-map"
        maxBounds={mapBounds}
      >
        <TileLayer
          attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
          maxZoom={20}
          tileSize={512}
          zoomOffset={-1}
          url={`https://api.mapbox.com/styles/v1/studentlifenewspaper/${id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
        />
        {markers}
      </Map>
    );
  }
}

export default SideMap;
