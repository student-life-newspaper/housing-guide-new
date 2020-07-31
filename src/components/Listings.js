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
      currentLocation: this.props.selectedLocation,
      selectedDorm: null,
      modalIsOpen: false,
    };
    this.selectDorm = this.selectDorm.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  selectDorm(dorm) {
    this.setState(
      {
        selectedDorm: dorm,
        modalIsOpen: true,
      },
    );
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const currentData = this.props.data;
    const list = currentData.map((dorm) => <SingleListing dorm={dorm} key={dorm.shortName} selectDorm={this.selectDorm} />);
    return (
      <Row className="listing-container mt-3">
        {list}
        <DormModal selectedDorm={this.state.selectedDorm} closeModal={this.closeModal} modalIsOpen={this.state.modalIsOpen} />
      </Row>
    );
  }
}

export default Listings;
