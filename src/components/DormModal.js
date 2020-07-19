import React from 'react';
import { Container, Row, Col, CardDeck,
  Button, Modal, ModalHeader, ModalBody, ModalFooter, 
} from 'reactstrap';
import ModalCarousel from './ModalCarousel.js'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../public/img/beaumont/', false, /\.(png|jpe?g|svg)$/));
console.log(images);

export default class DormModal extends React.Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  
  closeModal(){
    this.props.closeModal();
  }
  
  render(){
    const closeBtn = <button className="close" onClick={this.closeModal}>&times;</button>;
    if(this.props.selectedDorm === null){
      return <div></div>
    }else{
      const dorm = this.props.selectedDorm;
      return (
        <div>
          <Modal className='dorm-modal w80' isOpen={this.props.modalIsOpen} size={'lg'}>
            <ModalHeader close={closeBtn}>{dorm.name}</ModalHeader>
            <ModalCarousel carouselImages={dorm.carouselImages} dormName={dorm.name} />
            <ModalBody>
              <p>{dorm.longDesc}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}
