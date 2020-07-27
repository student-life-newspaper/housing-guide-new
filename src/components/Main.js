import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header.js';
import Filters from './Filters.js';
import Listings from './Listings.js';

import './Main.css'

const locationOptions = ['All', 'South 40', 'Village', 'Off Campus'];

class Main extends React.Component{
  constructor(props){
    super(props);
    this.onLocationSelection = this.onLocationSelection.bind(this);
    this.state = {
      selectedLocation: 'All'
    };
  }
  
  onLocationSelection(location) {
    this.setState({selectedLocation: location});
  }
  
  render(){
    return(
      <Container>
        <Row md='2'>
          <Header />
          <Col md='8' className="listings">
            <Row>
              <Filters selected={this.state.selectedLocation} options={locationOptions} onChange={this.onLocationSelection}/>
            </Row>
            <Listings selectedLocation={this.state.selectedLocation}/>
          </Col>
          <Col className="map"></Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
