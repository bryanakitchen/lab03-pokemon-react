import React from 'react'
import './App.css';
import pokemon from './Data';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokemonData from './Data.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PokeList pokemonProp={pokemonData}/>
      </div>
    )
  }
}
