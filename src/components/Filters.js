import React from 'react';
import { ButtonToggle, ButtonGroup } from 'reactstrap';

class Filters extends React.Component {
  render() {
    let buttons = this.props.options.map(option => {
      return <ButtonToggle 
                active={this.props.selected === option} 
                key={option}
                color='primary'
                className="filter-btn"
                onClick={(e) => this.props.onChange(option, e)}>
                {option}
              </ButtonToggle>
    });
    return (
      <ButtonGroup>
        {buttons}
      </ButtonGroup>
    );
  }
}

export default Filters;
