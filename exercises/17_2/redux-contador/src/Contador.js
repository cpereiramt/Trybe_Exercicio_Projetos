import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Contador extends Component {
    render() {
        return (
            <div>
                <h1>cliques contados : { this.props.count.count }</h1>
                {console.log(this.props.count.count)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
 count: state.counterReducer,
})

export default connect(mapStateToProps) (Contador);
