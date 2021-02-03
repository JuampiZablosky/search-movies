import React, { Component } from 'react';

export default class Forms extends Component {
    constructor(){
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }
    
    handleClick = (e) => {
        e.preventDefault();
        const name = this.inputName.value;
        const twitter = document.getElementById("twitter").value;
   
        console.log({name, twitter});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        /* const name = this.inputName.value;
        const twitter = document.getElementById("twitter").value;
   
        console.log({name, twitter}); */
        console.log(this.state);
    }

    handleChange = (e) => {
        console.log("handleChage");
        console.log(e.target.checked);
        this.setState({ inputTerms: e.target.checked })
    }

    render(){
        return (
            <div>
                <h3>Formularios</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre: </label>
                        <input 
                            id="name" 
                            type="text" 
                            name="name" 
                            onChange={e => this.setState({ inputName: e.target.value })}
                            placeholder="Ingrese el nombre"
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName}></input>
                    </p>
                    <p>
                        <label htmlFor="twitter">Twitter: </label>
                        <input 
                            id="twitter" 
                            type="text" 
                            name="twitter" 
                            onChange={e => { this.setState({ inputTwitter: e.target.value})}}
                            placeholder="Ingrese su twitter" 
                            value={this.state.inputTwitter}/>
                    </p>

                    <p>
                        <label>
                            <input 
                                checked={this.state.inputTerms}
                                onChange={this.handleChange} 
                                type="checkbox"/>
                            Accepted terms
                        </label>
                    </p>

                    {/* <button onClick={this.handleClick}>Enviar</button> */}
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}