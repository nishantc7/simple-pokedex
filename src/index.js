import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Pokeinfo from './components/solo-card/Poke-info';
ReactDOM.render(
  
  <BrowserRouter>
      <Routes>
      <Route path="/simple-pokedex" element={<App/>} ></Route>
        <Route exact path="/poke/info" element={<Pokeinfo/>}> </Route>
        </Routes>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
