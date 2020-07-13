import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header.js';
import Listings from './Listings.js';

function Main(props){
  return (
    <Container>
      <Row>
        <Header />
        <Col xs='6' className="listings">
          <Listings />
        </Col>
        <Col xs='6' className="map"></Col>
      </Row>
    </Container>
  );
}

export default Main;
