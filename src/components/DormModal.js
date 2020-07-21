import React from 'react';
import { Container, Row, Col, CardDeck,
  Button, Modal, ModalHeader, ModalBody, ModalFooter, 
} from 'reactstrap';
import ModalCarousel from './ModalCarousel.js'

// const facilities = {
//   studyRoom,computerLab,elevator,kitchen,seminarRoom,musicPractice,laundryRoom,closeDining,closeParking,closeMail,closeMetro,closeClocktower,closeCirculator,timeToDUC,timeToBrookings,timeToLoop
// };

export default class DormModal extends React.Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    // this.getFacilities = this.getFacilities.bind(this);
  };
  
  closeModal(){
    this.props.closeModal();
  }
  
  // getFacilities(dorm){
  //   let hasFacilities = facilities.map(key => {
  //     console.log(key)
  //     console.log(dorm.key)
  //     if(dorm.key === 'Yes')
  //       return (<li key={key}>Close to {key}</li>)
  //     else
  //       return null
  //   });
  //   console.log(hasFacilities);
  //   return (
  //     <ul>
  //       {hasFacilities}
  //     </ul>
  //   );
  // }
  
  render(){
    const closeBtn = <button className="close" onClick={this.closeModal}>&times;</button>;
    if(this.props.selectedDorm === null){
      return <div></div>
    }else{
      const dorm = this.props.selectedDorm;
      return (
        <div>
          <Modal className='dorm-modal w80' isOpen={this.props.modalIsOpen} size={'lg'}>
            <ModalHeader tag='h3' className='d-flex align-items-center'close={closeBtn}>{dorm.name}</ModalHeader>
            <ModalCarousel carouselImages={dorm.carouselImages} dormName={dorm.name} />
            <ModalBody>
              <Row className='text-center'>
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
              <p>{dorm.longDesc}</p>
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
