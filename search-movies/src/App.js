import React from 'react';

import { Detail } from './pages/Detail.js'
import { Home } from './pages/Home.js'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound.js'

import './App.css';
import 'bulma/css/bulma.css'

function App() {

  /* if (window.location.href.indexOf('id') > 0) {
    console.log('hasId')
    console.log(url)
    return <Detail />
  } */

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:id' component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
