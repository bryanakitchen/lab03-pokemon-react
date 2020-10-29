import React from 'react'
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokemonData from './Data.js';
import Sort from './Sort.js';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  state = {
      ability: '',
      hidden: '',
      submit: '',
      change: '',
  }
  
  handleChangeAbility = (e) => {
      this.setState({
        ability: e.target.value,
      })
  }

  handleChangeHidden = (e) => {
      this.setState({
        hidden: e.target.value,
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()  
    this.setState({
        submit: this.state.change,
// submit: this.state.change because that is the state we want to show and stop at.
      })
  }

  handleChange = (e) => {
      e.preventDefault()  
      this.setState({
        change: e.target.value,
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Link to="/" className="links" >Home</Link>
        <Link to="/SearchPage" className="links" >Search Page</Link>

        <Sort 
        handleChangeAbility={this.handleChangeAbility} 
        handleChangeHidden={this.handleChangeHidden} />

        <SearchBar 
        handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

        <PokeList 
        pokemonProp={pokemonData} 
        abilityProp={this.state.ability} 
        hiddenAbilityProp={this.state.hidden} 
        submitProp={this.state.submit} />
      </div>
    )
  }
}

// changeProp={this.state.change}