import Pokemon from './Pokemon'
import React from 'react'
import Button from './Button'


class Pokedex extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      pokemons : props.data,
      index : 0,
      currentElement:this.props.data[0]
    }
   } 
   
   navegaPokemons = () => {
   if(this.state.index < this.state.pokemons.length - 1) {
    this.setState((state, props) => ({
      index: state.index + 1
    }));  
   this.setState({currentElement:this.state.pokemons[this.state.index]}) 

   } else {
    this.setState({index: 0})
    this.setState({currentElement:this.state.pokemons[this.state.index]})
    
   }   
  }   
     render () {
      return (
        <div className="pokemon-container">
        <Pokemon data={this.state.currentElement}/>
        <Button event={this.navegaPokemons}/>
       </div>
    )
  }
    
  
}


export default Pokedex;