import Pokemon from './Pokemon'
import React from 'react'
import Button from './Button'


class Pokedex extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      pokemons : props.data,
      index : 0
    }
   } 
   
   navegaPokemons = () => {
     while(this.state.pokemons.length > this.state.index){
      console.log(this.state.index,"indice ");
      console.log(this.state.pokemons, "pokemons");
     }
   }
   
     render () {
      return (
        <div className="pokemon-container">
        <Pokemon data={this.state.pokemons}/>
        <Button event={this.navegaPokemons}/>
       </div>
    )
  }
    
  
}


export default Pokedex;