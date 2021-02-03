import React, { Component } from 'react'

class ComponenteA extends Component{
    render(){
        return <p>Componente A</p>
    }
}

class ComponenteB extends Component{
    render(){
        return <p>Componente B</p>
    }
}

/* function useConditionalRendering (mostrarA){
    if (mostrarA) {
        return <ComponenteA></ComponenteA>
    }
    return <ComponenteB></ComponenteB>
} */

export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = { mostrarA: false}
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
                {this.state.mostrarA ? <ComponenteA/> : <ComponenteB/>}
            </div>
        )
    }
}