import React from 'react';
import { Container, Row, Col, CardDeck,
  Button, Modal, ModalHeader, ModalBody, ModalFooter, 
} from 'reactstrap';
import ModalCarousel from './ModalCarousel.js'

const facilities = {
  studyRoom: "Study room",
  computerLab: "Computer and printer lab",
  elevator: "Elevator",
  kitchen: "Kitchen",
  seminarRoom: "Seminar room",
  musicPractice: "Music practice room",
  laundryRoom: "Laundry room",
  closeDining: "Close to school dining",
  closeParking: "Close parking",
  closeMail: "Close to mailroom",
  closeMetro: "Close to Metro stop",
  closeClocktower: "Close to Clocktower",
  closeCirculator: "Close to Circulator stop",
};
const walkTimes = {
  timeToDUC: "Danforth University Center",
  timeToBrookings: "Brookings Quadrangle",
  timeToLoop: "Delmar Loop",
}

export default class DormModal extends React.Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.getFacilities = this.getFacilities.bind(this);
    this.getWalkTimes = this.getWalkTimes.bind(this);
  };
  
  closeModal(){
    this.props.closeModal();
  }
  
  getFacilities(dorm){
    const facilitiesElements = Object.keys(facilities)
    .sort((key1, key2) => {
      if(dorm[key1] === 'No' && dorm[key2] === 'Yes')
        return +1
      if(dorm[key1] === 'Yes' && dorm[key2] === 'No')
        return -1
      
      return 0
    })
    .map(key => {
      if(dorm[key] === 'Yes')
        return (<Col xs={{size: 12, offset: 1}} md={{size: 4, offset: 0}} className="mb-1" key={key}> - {facilities[key]}</Col>)
      else if(dorm[key] === 'No')
        return (<Col xs={{size: 12, offset: 1}} md={{size: 4, offset: 0}} className="mb-1 missing-facilitiy" key={key}> - {facilities[key]}</Col>)
      else
        return null
    });
    return (
      <Row>
        <h4 className="w-100 mx-3 mt-4">Facilities</h4>
        <div className="modal-divider-horizontal"></div>
        {facilitiesElements}
      </Row>
    );
  }
  
  getWalkTimes(dorm){
    const timeElements = Object.keys(walkTimes).map(time => {
      if(dorm[time]){
        return (
          <Col xs={{size: 12, offset: 1}} md={{size: 4, offset: 0}} className="text-center" key={time}> // should these be left justified??
            <p className="font-weight-bold mb-1">{walkTimes[time]}</p>
            <p>{dorm[time]} minutes</p>
          </Col>
        );
      }
    });
    if(timeElements){
      return (
        <Row>
          <h4 className="w-100 mx-3 mt-4">Walk Times</h4>
          <div className="modal-divider-horizontal"></div>
          {timeElements}
        </Row>
      );
    }
    else
      return null;
  }
  
  render(){
    if(this.props.selectedDorm === null){
      return <div></div>
    }else{
      const dorm = this.props.selectedDorm;
      return (
        <div>
          <Modal className='dorm-modal w80' isOpen={this.props.modalIsOpen} size={'lg'}>
            <ModalCarousel carouselImages={dorm.carouselImages} dormName={dorm.name} />
            <ModalBody className="m-4">
              <div className='d-flex align-items-center justify-content-between'>
                <h1 className='modal-title'>{dorm.name}</h1>
                <button className="close" onClick={this.closeModal}>&times;</button>
              </div>
              <Row className='text-center mb-3 mt-4 font-weight-bold'>
                <Col>
                  {dorm.style} housing
                </Col>
                <Col>
                  {dorm.roomType[0].toUpperCase()}{dorm.roomType.slice(1)}
                </Col>
                <Col>
                  `Bathroom Type`
                </Col>
              </Row>
              {dorm.longDesc &&
                <Row>
                    <div className="modal-divider-horizontal mt-4"></div>
                    <p className="mx-3">{dorm.longDesc}</p>
                </Row>
              }
              {this.getWalkTimes(dorm)}
              {this.getFacilities(dorm)}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.closeModal}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}
