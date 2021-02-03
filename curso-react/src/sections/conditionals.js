import React, { Component } from 'react'

class LogInButton extends Component{
    render(){
        return (
            <button>Iniciar Sesión</button>
        )
    }
}

class LogOutButton extends Component{
    render(){
        return (
            <div>
                <p>Bienvenido, usuario</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

/* function useConditionalRendering (mostrarA){
    if (mostrarA) {
        return <ComponenteA></ComponenteA>
    }
    return <ComponenteB></ComponenteB>
} */

export default class ConditionalSectionTwo extends Component{
    constructor(){
        super()
        this.state = { isUserLogged: true}
    }
    render() {
        /* const conditionalComponent = this.state.mostrarA 
        ? <ComponenteA/> 
        : <ComponenteB/> */

        return (
            <div>
                <h4>Conditional Rendering</h4>
                {/* {useConditionalRendering(conditionalComponent)} */}
                {/* {conditionalComponent} */}
                {this.state.isUserLogged ? <LogOutButton/> : <LogInButton/>}
            </div>
        )
    }
}