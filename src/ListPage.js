import React from 'react'
import Header from './Header.js';
import PokeList from './PokeList.js';
// import pokemonData from './Data.js';
import Sort from './Sort.js';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import fetch from 'superagent';

export default class ListPage extends React.Component {
  state = {
      ability: '',
      hidden: '',
      submit: '',
      change: '',
      pokeData: [],
  }
  
    // fetchPokemon 


  componentDidMount = async () => {
    const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    console.log(response.body.results)
    this.setState({ pokeData: response.body.results });
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
        <Link to="/Search" className="links" >Search Page</Link>

        <Sort 
        handleChangeAbility={this.handleChangeAbility} 
        handleChangeHidden={this.handleChangeHidden} />

        <SearchBar 
        handleSubmit={this.handleSubmit} handleChange={this.handleChange} pokeData={this.state.pokeData} />

        <PokeList 
        pokeData={this.state.pokeData} 
        abilityProp={this.state.ability} 
        hiddenAbilityProp={this.state.hidden} 
        submitProp={this.state.submit} />
      </div>
    )
  }
}

// changeProp={this.state.change}

// https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.category}=${this.state.search}&sort=${this.state.sort}

// Styled ListPage Component (with react-router) that fetches characters by name on load (use componentDidMount)
// Add a fetchPokemon method to your List page. It should use state to make the correct fetch, based on the user's current selections.
// Fetch pokemon on Search (should sort and filter correctly, using the API)
// Add loading spinner to List page (on mount and on search)