import React from 'react';

class ButtonNext extends React.Component {
  render() {
    return <button onClick={this.props.navegar}>
           {this.props.name} 
           </button >
 
  }
}


export default ButtonNext;