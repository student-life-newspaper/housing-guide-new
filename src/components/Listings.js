import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filters from './Filters.js';

import jsonData from '../assets/data/south40freshman.json';

import './Listings.css'

const dormData = Object.values(jsonData);

class Listings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentStyle: this.props.selectedStyle
    };
    this.getData = this.getData.bind(this);
  }
  
  getData(){
    let data;
    console.log(this.props.selectedStyle);
    if(this.props.selectedStyle !== 'All'){
      data = dormData.filter((dorm) => {
        return dorm.style == this.props.selectedStyle;
      });
    }else{
      console.log('here');
      data = dormData;
    }
    
    return data;
  }
  
  render(){
    const currentData = this.getData();
    const list = currentData.map(dorm =>
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

export default Listings;
