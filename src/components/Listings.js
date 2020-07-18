import React from 'react';
import { Container, Row, Col, CardDeck } from 'reactstrap';
import SingleListing from './SingleListing.js'
import DormModal from './DormModal.js'

import jsonData from '../data/south40freshman.json';

const dormData = Object.values(jsonData);
const dormNames = Object.keys(jsonData);


class Listings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentStyle: this.props.selectedStyle,
      selectedDorm: null,
      modalIsOpen: false
    };
    this.getData = this.getData.bind(this);
    this.selectDorm = this.selectDorm.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  getData(){
    let data;
    if(this.props.selectedStyle !== 'All'){
      data = dormData.filter((dorm) => {
        return dorm.style === this.props.selectedStyle;
      });
    }else{
      data = dormData;
    }
    
    return data;
  }
  
  selectDorm(dorm){
    this.setState(
      {
        selectedDorm: dorm,
        modalIsOpen: true
      }
    );
  }
  
  closeModal(){
    this.setState({modalIsOpen: false});
  }
  
  render(){
    const currentData = this.getData();
    const list = currentData.map(dorm =>
      <SingleListing dorm={dorm} key={dorm.shortName} selectDorm={this.selectDorm}/>
    );
    return (
      <Row className='listing-container'>
        {list}
      <DormModal selectedDorm={this.state.selectedDorm} closeModal={this.closeModal} modalIsOpen={this.state.modalIsOpen}/>
      </Row>
    );
  }
}

export default Listings;
