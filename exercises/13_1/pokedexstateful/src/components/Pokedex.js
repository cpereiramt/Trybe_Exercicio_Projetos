import Pokemon from './Pokemon'
import React from 'react'
import ButtonNext from './Button'
import ButtonPokemonType from './ButtonPokemonType'


class Pokedex extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      pokemons : props.data,
      index : 0,
      currentElements:'',
      pokemonsFiltrados:[props.data]
    }
   } 
   
   filtraPokemon = (Type) => {
     if(Type === "all") {
      this.setState({pokemonsFiltrados:this.props.data})
     }
    this.setState({pokemonsFiltrados:this.state.pokemons.filter(element => element.type === Type)})
   }

   navegaPokemons = () => {
   if(this.state.index < this.state.pokemonsFiltrados.length - 1) {
    this.setState((state) => ({
      index: state.index + 1
    }));  
   this.setState({currentElements:this.state.pokemonsFiltrados[this.state.index]}) 

   } else {
    this.setState({index: 0})
    this.setState({currentElements:this.state.pokemonsFiltrados[this.state.index]})    
   }   
  }   
     render () {
      return (
        <div className="pokemon-container">
          {console.log(this.state.currentElements)}
        <Pokemon data={this.state.currentElements}/>
        <ButtonNext navegar={this.navegaPokemons} name="Proximo"/>
        <ButtonPokemonType filtrar={this.filtraPokemon} name="Fire"/>
        <ButtonPokemonType filtrar={this.filtraPokemon} name="Psychic"/>
        <ButtonPokemonType filtrar={this.filtraPokemon} name="all"/>      
       </div>
    )
  }   
  
}


export default Pokedex;