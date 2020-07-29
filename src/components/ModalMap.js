import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class ModalMap extends React.Component {
  constructor(props){
    super(props);
    this.getPosition = this.getPosition.bind(this);
  }
    
  getPosition(coordinates){
    const position = this.props.coordinates.split(', ');
    if(position.length === 2)
      return position;
    else if((position.length % 2) === 0){
      let avgLat = 0;
      let avgLong = 0;
      for(let i = 0; i < position.length; ++i){
        if((i % 2) === 0)
          avgLat  += position[i]/(position.length/2);
        else
          avgLong += position[i]/(position.length/2);
      }
      return [avgLat, avgLong];
    }
  }
  
  render() {
    console.log(this.props.coordinates)
    const position = this.getPosition(this.props.coordinates);
    const id = 'ck9nkgte3058o1ip80xvsnybg';
    const accessToken = 'pk.eyJ1Ijoic3R1ZGVudGxpZmVuZXdzcGFwZXIiLCJhIjoiY2s5bmhrZTFzMDJjajNmbzd2eHpoc3BraCJ9.mfW3MvzjG6Rvch9CF1q-Sg';
    return (
      <Map
       center={position} 
       zoom={18} 
       style={{ width: '100%', height: '100%'}}
       className="mx-3"
      >
        <TileLayer
           attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
           maxZoom={20}
           tileSize={512}
           zoomOffset={-1}
           url={'https://api.mapbox.com/styles/v1/studentlifenewspaper/' + id + '/tiles/{z}/{x}/{y}?access_token=' + accessToken}
        />
      <Marker position={position}></Marker>
      </Map>
    );
  }
}

export default ModalMap;
