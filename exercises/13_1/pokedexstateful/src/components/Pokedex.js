import Pokemon from './Pokemon'
import React from 'react'


function Pokedex(props) {   
     
    return (
      <div className="pokemon-container">
      <Pokemon data={props.data}/>
     </div>
  )

}


export default Pokedex;