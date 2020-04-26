
import React from 'react';
import './pokemon.css';



class Pokemon extends React.Component {
 

     render() {
       return (
            <div className='pokemon'>
          <div className='pokemon-labels'>            
          <label>Name: {this.props.data[0].name} </label>
          <br />
          <label>Type:  {this.props.data[0].type} </label>
          <br />
          <label>Weight:  {this.props.data[0].averageWeight.value} {this.props.data[0].averageWeight.measurementUnit}</label>
          <br />
          </div>
          <div className='pokemon-image'>
          <img className="imgPokemon" src={this.props.data[0].image} alt={`id from pokemon` + this.props.data[0]}></img>  
          </div>
          </div>
            )
      }
    }
       
  export default Pokemon;