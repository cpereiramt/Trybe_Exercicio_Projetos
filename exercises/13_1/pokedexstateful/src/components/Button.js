import React from 'react';

class Button extends React.Component {
  render() {
    return <button onClick={this.props.event}>
           Proximo 
          </button >
 
  }
}


export default Button;