import React, { Component } from 'react'

const HelloRender = (props) => <h1>Hola render!</h1>

class Render extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = { mensaje: 'mensaje inicial' }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
      console.log('render')
      //return null
      //return this.state.mensaje === 'mensaje inicial' ? 'sip!' : null
      /* return (
        <div>
            <h4>Elemento DOM aqui</h4>
            <HelloRender/>
            <p>Justo debajo de un componente de React</p>
        </div>
      ) */
      return [
          <h1 key="A">Primer elemento</h1>,
          <HelloRender key="C"/>,
          <HelloRender key="D"/>,
          <h3 key="B">Cuarto elemento</h3>
        ]
  }

}

export default Render