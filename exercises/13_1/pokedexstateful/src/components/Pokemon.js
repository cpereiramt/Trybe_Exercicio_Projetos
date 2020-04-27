
import React from 'react';
import './pokemon.css';



class Pokemon extends React.Component {
 
   

     render() {
     
      return (          
            <div className='pokemon'>
          <div className='pokemon-labels'>            
          <label>Name: {this.props.data.name} </label>
          <br />
          <label>Type: {this.props.data.type}  </label>
          <br />
       <label>Weight: {this.props.data.averageWeight.value} {this.props.data.averageWeight.measurementUnit} </label>
          <br />
          </div>
          <div className='pokemon-image'>
          <img className="imgPokemon" src={this.props.data.image} alt="pokemon list"></img> 
          </div>
          </div>
            )
      }
    }
       
  export default Pokemon;