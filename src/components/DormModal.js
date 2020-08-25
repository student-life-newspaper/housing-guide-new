import React from 'react';
import {
  Container, Row, Col, CardDeck,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import ModalCarousel from './ModalCarousel.js';
import ModalMap from './ModalMap.js';

const facilities = {
  studyRoom: 'Study room',
  computerLab: 'Computer and printer lab',
  elevator: 'Elevator',
  kitchen: 'Kitchen',
  seminarRoom: 'Seminar room',
  musicPractice: 'Music practice room',
  laundryRoom: 'Laundry room',
  closeDining: 'Close to school dining',
  closeParking: 'Close parking',
  closeMail: 'Close to mailroom',
  closeMetro: 'Close to Metro stop',
  closeClocktower: 'Close to Clocktower',
  closeCirculator: 'Close to Circulator stop',
};
const walkTimes = {
  timeToDUC: 'Danforth University Center',
  timeToBrookings: 'Brookings Quadrangle',
  timeToLoop: 'Delmar Loop',
};

export default class DormModal extends React.Component {
  constructor(props) {
    super(props);
    this.getFacilities = this.getFacilities.bind(this);
    this.getWalkTimes = this.getWalkTimes.bind(this);
  }

  getFacilities(dorm) {
    const facilitiesElements = Object.keys(facilities)
      .sort((key1, key2) => {
        if (dorm[key1] === 'No' && dorm[key2].substring(0, 3) === 'Yes') return +1;
        if (dorm[key1].substring(0, 3) === 'Yes' && dorm[key2] === 'No') return -1;

        return 0;
      })
      .map((key) => {
        if (dorm[key].substring(0, 3) === 'Yes') {
          return (
            <Col xs={{ size: 12}} md={{ size: 4}} className="mb-1 modal-body-text" key={key}>
              {facilities[key]}
            </Col>
          );
        } if (dorm[key] === 'No') {
          return (
            <Col xs={{ size: 12}} md={{ size: 4}} className="mb-1 missing-facilitiy modal-body-text" key={key}>
              {facilities[key]}
            </Col>
          );
        }
        return null;
      });
    return (
      <Row>
        <h4 className="w-100 mx-3 mt-4">Facilities</h4>
        <div className="modal-divider-horizontal" />
        {facilitiesElements}
      </Row>
    );
  }

  getWalkTimes(dorm) {
    const timeElements = Object.keys(walkTimes).map((time) => {
      if (dorm[time]) {
        return (
          <Col xs={{ size: 12, offset: 0 }} md={{ size: 4, offset: 0 }} className="text-center" key={time}>
            <p className="font-weight-bold mb-1">{walkTimes[time]}</p>
            <p  className="modal-body-text">
              {dorm[time]}
              {' '}
              minutes
            </p>
          </Col>
        );
      }
    });
    if (timeElements) {
      return (
        <Row>
          <h4 className="w-100 mx-3 mt-4">Walk Times</h4>
          <div className="modal-divider-horizontal" />
          {timeElements}
        </Row>
      );
    }
    return null;
  }

  render() {
    if (this.props.selectedDorm === null) {
      return <div />;
    }
    const dorm = this.props.selectedDorm;
    const closeButton = <button className="close" onClick={this.props.toggleModal}>&times;</button>;
    return (
      <div>
        <Modal className="dorm-modal w80 my-0" isOpen={this.props.modalIsOpen} toggle={this.props.toggleModal} size="lg">
          <ModalHeader close={closeButton} />
          <ModalCarousel carouselImages={dorm.carouselImages} dormName={dorm.shortName} />
          <ModalBody className="m-4">
            <h1 className="modal-title text-center">{dorm.name}</h1>
            <Row className="text-center mt-4 font-weight-bold">
              <div className="modal-divider-horizontal mt-1" />
              <Col className="mb-3" xs={{ size: 12, offset: 0 }} md={{ size: 4, offset: 0 }}>
                {dorm.style}
                {' '}
                housing
              </Col>
              <Col className="mb-3" xs={{ size: 12, offset: 0 }} md={{ size: 4, offset: 0 }}>
                {dorm.roomType[0].toUpperCase()}
                {dorm.roomType.slice(1)}
              </Col>
              <Col className="mb-3" xs={{ size: 12, offset: 0 }} md={{ size: 4, offset: 0 }}>
                {dorm.bathroomType}
              </Col>
            </Row>
            {dorm.longDesc
                && (
                  <Row>
                    <div className="modal-divider-horizontal mt-4" />
                    <p className="mx-3 modal-body-text">{dorm.longDesc}</p>
                  </Row>
                )}
            {this.getWalkTimes(dorm)}
            {this.getFacilities(dorm)}
            <Row className="modal-map-container">
              <div className="modal-divider-horizontal mt-4" />
              <ModalMap coordinates={dorm.coordinates} />
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" className="modal-close-btn" onClick={this.props.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
