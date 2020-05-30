import React from 'react';
import { connect } from 'react-redux';
import { sumInputs1, sumInputs2 , sumInputs3 , sumALL } from './action';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        input_one: 0, 
        input_two: 0,
        input_three: 0,         
    };
    this.event_one = this.event_one.bind(this);
    this.event_two = this.event_two.bind(this);
    this.event_three = this.event_three.bind(this);
  }

  event_one(event ) {
   this.setState({ input_one : event })
   this.props.value1(Number(event));
   this.props.sumAll()
  }

  event_two(event) {
    this.setState({ input_two : event })
    this.props.value2(Number(event));
    this.props.sumAll()

  }
  
  event_three(event) {
    this.setState({ input_three : event  })
    this.props.value3(Number(event));
    this.props.sumAll()
  }

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Digite o primeiro valor"
          onChange={event => this.event_one( event.target.value )}
        />
        <input
          type="number"
          placeholder="Digite o seugndo valor"
          onChange={event => this.event_two( event.target.value )}
        />
        <input
          type="number"
          placeholder="Digite o terceiro valor"
          onChange={event => this.event_three( event.target.value )}
        />
        <br/>
        {this.props.values.input_sum}
        {console.log(this.props.values.input_sum)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  value1: e => dispatch(sumInputs1(e)),
  value2: e => dispatch(sumInputs2(e)),
  value3: e => dispatch(sumInputs3(e)),
  sumAll: e => dispatch(sumALL(e)),
});

const mapStateToProps = state => ({
  values : state.inputSumReducer

})
export default connect(mapStateToProps, mapDispatchToProps)(InputsList);