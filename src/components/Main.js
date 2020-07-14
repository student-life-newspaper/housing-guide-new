import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header.js';
import Filters from './Filters.js';
import Listings from './Listings.js';

const locationOptions = ['All', 'South 40', 'Village & Off Campus'];
const styleOptions = ['All','Modern', 'Traditional'];

class Main extends React.Component{
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
  
  render(){
    return(
      <Container>
        <Row>
          <Header />
          <Col xs='6' className="listings">
            <Filters selected={this.state.selectedLocation} options={locationOptions} onChange={this.onLocationSelection}/>
            <Filters selected={this.state.selectedStyle} options={styleOptions} onChange={this.onStyleSelection}/>
            <Listings selectedStyle={this.state.selectedStyle}/>
          </Col>
          <Col xs='6' className="map"></Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
