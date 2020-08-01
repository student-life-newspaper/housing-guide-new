import React from 'react';
import {
  Container, Row, Col, CardDeck,
} from 'reactstrap';
import SingleListing from './SingleListing.js';
import DormModal from './DormModal.js';


class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const currentData = this.props.data;
    const list = currentData.map((dorm) => <SingleListing dorm={dorm} key={dorm.shortName} selectDorm={this.props.selectDorm} />);
    return (
      <Row className="listing-container mt-3">
        {list}
        <DormModal selectedDorm={this.props.selectedDorm} closeModal={this.props.closeModal} modalIsOpen={this.props.modalIsOpen} />
      </Row>
    );
  }
}

export default Listings;
