import React from 'react';
import { Container, Row, Col, CardDeck,
  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            <ModalHeader close={closeBtn}>{dorm.name || null}</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Do Something</Button>{' '}
              <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}
