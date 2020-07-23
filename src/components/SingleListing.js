import React from 'react';
import { Container, Row, Col, Card, CardText, 
  CardBody, CardTitle} from 'reactstrap';

export default class SingleListing extends React.Component {
  constructor(props){
    super(props);
    this.selectDorm = this.selectDorm.bind(this);
  }
  
  selectDorm(){
    this.props.selectDorm(this.props.dorm);
  }
  
  render(){
    // TODO: onKeyDown={return event.keyCode != 13 || this.selectDorm}
    // add enter key on dorm selection
    let dorm = this.props.dorm;
    return(
        <Card className='single-listing cursor-pointer w-100 mb-3' tabIndex="0" onClick={this.selectDorm}>
          <Row noGutters>
            <Col md='4'>
              <img className='dorm-thumbnail' src={process.env.PUBLIC_URL + '/img/thumbs/' + this.props.dorm.shortName + '.png'} alt={dorm.shortName}/>
            </Col>
            <Col md='8'>
              <CardBody>
                <CardTitle tag='h2'>{dorm.name}</CardTitle>
                <CardText>{dorm.style + ' ' + dorm.roomType.charAt(0).toLowerCase() + dorm.roomType.slice(1)}</CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
    );
  }
}
