import React from 'react';

class ButtonPokemonType extends React.Component {
  render () {
   return(
   <button onClick={() => {
       this.props.filtrar(this.props.name)
   }}>{this.props.name}</button>
   )
  }
}

export default ButtonPokemonType;