import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header.js';
import Filters from './Filters.js';
import Listings from './Listings.js';
import SideMap from './SideMap.js';

import './Main.css';

import jsonData from '../data/data.json';

const dormData = Object.values(jsonData);
const dormNames = Object.keys(jsonData);

const locationOptions = ['All', 'South 40', 'Village', 'Off Campus'];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: 'All',
      data: dormData,
    };
    this.onLocationSelection = this.onLocationSelection.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData(location = this.state.selectedLocation) {
    let filteredData;
    if (location !== 'All') {
      filteredData = dormData.filter((dorm) => dorm.location === location);
    } else {
      filteredData = dormData;
    }

    this.setState({ data: filteredData });
  }
  
  onLocationSelection(location) {
    this.setState({ selectedLocation: location });
    this.getData(location);
  }

  render() {
    return (
      <Container fluid={true} className="housing-container px-5">
        <Row>
          <Header />
          <Col md="6" className="listings">
            <Row>
              <Filters selected={this.state.selectedLocation} options={locationOptions} onChange={this.onLocationSelection} />
            </Row>
            <Listings selectedLocation={this.state.selectedLocation} data={this.state.data} />
          </Col>
          <Col md="6" className="side-map pl-0">
            <SideMap selectedLocation={this.state.selectedLocation} data={this.state.data} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
