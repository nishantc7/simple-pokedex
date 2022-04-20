/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pokeinfo from './components/solo-card/Poke-info';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
      const data = await response.json();
      this.setState({ monsters: data.results })
    }
    catch (err) {

    }
  }


  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (

      <div className="App ">


        <hr />
        <h1>Simple Pokedex</h1><hr />
        <SearchBox
          placeholder="Search Pokemon"
          handleChange={this.handleChange} /><hr />
        <div className='scroller'>
          <CardList monsters={filteredMonsters} />
        </div>

      </div>
    );
  }
}

export default App;
