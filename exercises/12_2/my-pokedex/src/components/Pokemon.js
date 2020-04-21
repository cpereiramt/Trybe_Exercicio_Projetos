
import React from 'react';
import './pokemon.css';



function Pokemon(props) {
       const fields = props.data.map(element => {
      return(
          <div className='pokemon'>
        <div className='pokemon-labels'>            
        <label>Name: {element.name} </label>
        <br />
        <label>Type:  {element.type} </label>
        <br />
        <label>Weight:  {element.averageWeight.value} {element.averageWeight.measurementUnit}</label>
        <br />
        </div>
        <div className='pokemon-image'>
        <img className="imgPokemon" src={element.image} alt={`id from pokemon` + element}></img>  
        </div>
        </div>
          )
    })
  return (
    <div className='pokemon-list'>  
    {fields}
    </div>)}

  export default Pokemon;