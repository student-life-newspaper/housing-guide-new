import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import jsonData from '../assets/data/south40freshman.json';

function getListings(){
  const dataArray = Object.entries(jsonData);
  const list = dataArray.map(dorm =>
    <div className='single-listing' key={dorm.name}>
      <h2>{dorm.name}</h2>
      
    </div>
  );
  return <div className='listing-container'>{list}</div>
}

function Listings(props){
  return (
    getListings()
  );
}

export default Listings;
