import React from 'react';

class Button extends React.Component {
  render() {
   return (
     <button
      onClick={() => {
       this.props.onevento(this.props.name)}}
       >
       {this.props.name}
     </button>
   )

  }
}

class Label extends React.Component {
  render() {
  return (<div>
          O botão clicado foi : {this.props.state}
         </div>)
  }
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      labelText : '',
    }
  }
   
  setNameLabel = (label) => {
    this.setState({labelText: label});
  }

  render(){
  console.log(this.state)
    
  return (
    <div className="App">
     <Label state={this.state.labelText}/>
     <Button name="botao 1" onevento={this.setNameLabel} />
     <Button name="botao 2" onevento={this.setNameLabel} />
     <Button name="botao 3" onevento={this.setNameLabel} />
     <Button name="botao 4" onevento={this.setNameLabel} />
    </div>
  );}
}

export default App;
