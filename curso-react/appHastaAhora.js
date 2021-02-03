import React , { Component , useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Forms from './sections/forms.js'
import PropTypes from 'prop-types'

import ConditionalSection from './sections/conditional';
import ConditionalSectionTwo from './sections/conditionals';
import cars from './data/cars.json';

/* function Hello (props){
  return <h2>{props.title}</h2>
} */

//const Hello = (props) => <h2>{props.title}</h2> 

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render(){
    //Para no tener que escribir this.props.xxxx en todo se pone:
    const {      
      arrayOfNumbers,        
      isActivated, 
      multiply,
      number,  
      objectWithInfo,
      text,
      title } = this.props

    const textoSegunBool = isActivated ? 'On' : 'Off'
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
      <div>
        <p>{title}</p>
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}

Text.defaultProps = {
  title: 'Este es por defecto'
}

//Para usar el state (ejemplo)
class Contador extends Component{
  constructor(props){
    super(props)
    this.state = { contador: this.props.contadorInicial } 
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1})
    }, 1000)
  }

  render(){
    return <ContadorNumero numero={this.state.contador}></ContadorNumero>
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component{
  render(){
    return <span>{this.props.numero}</span>
  }
}

class CarItem extends Component{
  render(){
    const { car } = this.props
    
    return (
      <li>
        <p><strong>Nombre:</strong> {car.name}</p>
        <p><strong>Marca:</strong> {car.company}</p>
      </li>
      )
  }
}

class Box extends Component {
  render (){
    return(
      <div style={{ border: '1px solid #000', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  //asi o como esta comentado abajo, con esto ya puedo eliminar el constructor
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  //Con esto hago que me muestre en consola si no pase la prop obligatoria author

  /* constructor (props) {
    super(props)
    if (typeof props.author === 'undefined'){
      console.warn('author prop is required')
      //Si queremos que se lance un error cuando no esta esa prop, entonces:
      throw new Error('author prop is required')
    }
  } */

  render(){
    const { author, title, children, date } = this.props
    
    return(
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

/* Article.propTypes = {
  author: PropTypes.string
} */

function App() {
  const [coordenadas, setCoordenadas] = useState({mouseX: 0, mouseY: 0});

  const numbers = [1, 1, 3, 4, 5]

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCoordenadas({mouseX: clientX, mouseY: clientY});
  };

  const handleClick = (e) => {
    alert("Hi there!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Welcome to react"></Hello>
      </header>
      <h2>Children layout</h2>
      <Article 
        author="Juan Pablo Zablosky"
        date={new Date().toLocaleDateString()}
        title="Articulo sobre la prop children">
          <p>El contenido que envolvemos dentro del componente Article será enviado como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
      </Article>
      <hr/>
      <h2>Children</h2>
      <Box>Hola soy un children</Box>
      <Box>Otro box con otro contenido</Box>
      <hr></hr>
      <h2>Formularios</h2>
      <Forms></Forms>
      <hr></hr>
      <h2>Eventos</h2>
      <div
        style={{border: '1px solid #000', marginTop: 10, padding:'30vh', width: '90vw'}}
        onMouseMove={handleMouseMove}><p>({coordenadas.mouseX}, {coordenadas.mouseY})</p>
      </div>
      <button onClick={handleClick}>Hi there!</button>
      <hr></hr>
      <h2>Trabajando con listas de objetos</h2>
      <ul>
        {
          cars.map(car => {
            return <CarItem key={car.id} car={car}></CarItem>
          })
        }
      </ul>
      <hr></hr>
      <h2>Trabajando con listas</h2>
      {numbers.map((number, index) => {
        return <p key={index}>Soy el numero {number}</p>
      })}
      <hr></hr>
      <ConditionalSectionTwo/>
      <hr></hr>
      <ConditionalSection></ConditionalSection>
      <hr></hr>
      <p>Primer componente con state</p>
      <Contador></Contador>
      <hr></hr>
      <Text
        arrayOfNumbers={[1,2,3]}
        isActivated 
        multiply={(number) => number * 4}
        number={2} 
        objectWithInfo={{key: 'first value', key2: 'otherValue'}}
        text="Texto en string" 
         ></Text>
    </div>
  );
}

export default App;