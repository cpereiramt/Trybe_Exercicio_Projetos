import React from 'react';
import { connect } from 'react-redux';
import { sumInputs1, sumInputs2 , sumInputs3 } from './actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        input_one: 0, 
        input_two: 0,
        input_three: 0,    
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite o primeiro valor"
          onChange={event => this.setState({ input_one: event.target.value })}
        />
        <input
          type="text"
          placeholder="Digite o seugndo valor"
          onChange={event => this.setState({ input_two: event.target.value })}
        />
        <input
          type="text"
          placeholder="Digite o terceiro valor"
          onChange={event => this.setState({ input_three: event.target.value })}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  value1: e => dispatch(addAssignment(e)),
  value2: e => dispatch(addAssignment(e)),
  value3: e => dispatch(addAssignment(e)),
});

export default connect(null, mapDispatchToProps)(InputsList);