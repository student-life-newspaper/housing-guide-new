import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import jsonData from '../assets/data/south40freshman.json';

import './Listings.css'

class Listing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataArray: Object.values(jsonData)
    }
  }
  
  
  render(){
    const list = this.state.dataArray.map(dorm =>
      <div className='single-listing' key={dorm.name}>
        <h2>{dorm.name}</h2>
        <ul>
          <li>Style: {dorm.style}</li>
          <li>{dorm.roomType}</li>
        </ul>
      </div>
    );
    return <div className='listing-container'>{list}</div>
  }
}

export default Listing;
