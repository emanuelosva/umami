import React from 'react';

import './App.css';


// los componentes bootstrap que podemos usar si decidimos usar bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Template from '../src/components/template'

// componentes

import Receta from './components/receta'
import inicio from './components/inicio'
import Desayuno from './components/Desayuno'
import Almuerzos from './components/Almuerzos'
import Comida from './components/comida'

const App =() => {
  return (   

    <BrowserRouter> 
      <Template>     
        <Switch>
           <Route exact path ="/" component = {inicio}/>
           <Route exact path ="/receta" component = {Receta}/> 
           <Route exact path ="/desayuno" component = {Desayuno}/>
           <Route exact path ="/Almuerzos" component = {Almuerzos}/>
           <Route exact path ="/Comida" component = {Comida}/>
        </Switch>              

      </Template>
    </BrowserRouter>
   
  );
}

export default App;
