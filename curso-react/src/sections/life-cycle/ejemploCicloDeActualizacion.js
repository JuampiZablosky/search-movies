import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent{
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps (nextProps) {
        console.clear()
        console.log('1. componentWillRecieveProps', nextProps)
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
    }

    // Si hacemos que la clase extienda directo de PureComponent, directamente no hace falta usar el shouldComponent. Pero
    // solo con props y states simples, sino puede hacer que sean falsos positivos y cosas asi
    /* shouldComponentUpdate (nextProps) {
        console.log('2. shouldComponentUpdate')
       // console.log('anterior:', this.props.animal)
       // console.log('nuevo: ', nextProps.animal)
        return this.props.animal !== nextProps.animal
    } */
    
    componentWillUpdate (nextProps, nextState){
        console.log('componentWillUpdate', nextProps, nextState)
        const img = document.querySelector('img')
        console.log('from img element', { alt: img.alt })
        img.animate([ {
            filter: 'blur(0px)'
        }, {
            filter: 'blur(2px)'
        }], {
            duration: 500,
            easing: 'ease'
        })
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('4. componentDidUpdate')
        const img = document.querySelector('img')
        img.animate([
            {
                filter: 'blur(2px)'
            },
            {
                filter: 'blur(0px)'
            }
        ], {
            duration: 1500,
            easing: 'ease'
        })
    }

    render() {
        console.log('-> render')
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'></img>
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}


class EjemploDeCicloDeActualizacion extends Component{
    state = { animal: 'panda' }
    
    _renderAnimalButton = (animal) => {
        return(
            <button 
                //disabled={animal === this.state.animal}
                key={animal} 
                onClick={() => this.setState({ animal })}>
                {animal}
            </button>
        )

    }

    render(){
        return(
            <div>
                <h4>Ciclo de Actualizacion, Ejemplo de: ShouldComponentUpdate</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>

            </div>
        )
    }
}

export default EjemploDeCicloDeActualizacion