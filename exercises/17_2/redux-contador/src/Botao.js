import React, { Component } from 'react'
import {addCount, subCount} from './actions/index';
import { connect } from 'react-redux';


export class Botao extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }; 
     }
    render() {
        return (
            <div>
                <button onClick={() => this.props.add(this.state.count)}>Clique Para contar </button>
                <button onClick={() => this.props.desc(this.state.count)}>Clique Para descontar </button>
            </div>        
        )
    }
}

const mapDispatchToProps = dispatch => ({
  add: event => dispatch(addCount()),
  desc: event => dispatch(subCount())
})

export default connect( null, mapDispatchToProps) (Botao);
