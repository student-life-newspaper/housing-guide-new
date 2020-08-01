import React from 'react';
import {
  Container, Row, Col, Card, CardText,
  CardBody, CardTitle,
} from 'reactstrap';

export default class SingleListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: onKeyDown={return event.keyCode != 13 || this.selectDorm}
    // add enter key on dorm selection
    const dorm = this.props.dorm;
    return (
      <Card className="single-listing cursor-pointer w-100 mb-3" tabIndex="0" onClick={() => this.props.selectDorm(dorm)}>
        <Row noGutters>
          <Col sm="4">
            <div className="dorm-thumbnail-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/thumbs/${this.props.dorm.shortName}.png)`}}>
              <img className="dorm-thumbnail" src={`${process.env.PUBLIC_URL}/img/thumbs/${this.props.dorm.shortName}.png`} alt={dorm.shortName} />
            </div>
          </Col>
          <Col sm="8">
            <CardBody>
              <CardTitle tag="h2">{dorm.name}</CardTitle>
              <CardText>{`${dorm.style} ${dorm.roomType.charAt(0).toLowerCase()}${dorm.roomType.slice(1)}`}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }
}
