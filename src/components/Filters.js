import React from 'react';
import { ButtonToggle, ButtonGroup } from 'reactstrap';

class Filters extends React.Component {
  render(){
    let buttons = this.props.options.map(option => {
      return <ButtonToggle 
                active={this.props.selected === option} 
                outline color='primary' 
                key={option}
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
