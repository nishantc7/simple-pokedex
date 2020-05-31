/* eslint-disable no-useless-constructor */
import React , { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(response => response.json())
    .then(results => results['results'])
    .then(users => this.setState({monsters: users}))
  }


  handleChange = (e) => {
    this.setState({searchField : e.target.value});
  }


  render() {
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    
    return (
      <div className="App">
      <h1>Simple Pokedex</h1>
      <SearchBox 
      placeholder="Search Pokemon"
      handleChange={ this.handleChange } />
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
