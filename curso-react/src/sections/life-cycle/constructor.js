import React , { Component } from 'react';

class App extends Component{

  //CONSTRUCTOR POR DEFECTO (todas las clases lo tienen)
  /* constructor(...args) {
        super(...args)
      }
  */

  constructor (props){
    super(props) //este metodo llama al constructor de Component
    //inicializamos el state de nuestro componente
    this.state = { mensajeInicial: 'mensaje inicial' }
    // bindeamos el contexto del metodo, como abajo o con las arrow functions
    //this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({ mensajeInicial: 'mensaje cambiado' })
  }

  render (){
    return(
      <div className="App">
        <h4>Ciclo de montaje: constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>Cambiar nombre</button>
      </div>
    )
  }
}

export default App;