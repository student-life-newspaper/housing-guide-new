import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filters from './Filters.js';
import jsonData from '../assets/data/south40freshman.json';
import Listing from './SingleListing.js'

//import './Listings.css'
const locationOptions = ['All', 'South 40', 'Village & Off Campus'];
const styleOptions = ['All','Modern', 'Traditional'];

class Listings extends React.Component{
  constructor(props){
    super(props);
    this.onLocationSelection = this.onLocationSelection.bind(this);
    this.onStyleSelection = this.onStyleSelection.bind(this);
    this.state = {
      selectedLocation: 'All',
      selectedStyle: 'All'
    };
  }
  
  onLocationSelection(location) {
    this.setState({selectedLocation: location});
  }
  onStyleSelection(style){
    this.setState({selectedStyle: style});
  }
  
  render() {
    return (
      <div>
        <Filters selected={this.state.selectedLocation} options={locationOptions} onChange={this.onLocationSelection}/>
        <Filters selected={this.state.selectedStyle} options={styleOptions} onChange={this.onStyleSelection}/>
        <Listing />
      </div>
    )
  };
}

export default Listings;
