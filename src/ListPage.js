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
      sort1: '',
      sort2: '',
      textChange: '',
      pokeData: [],
  }
  
  fetchPokemon = async () => {
    const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    // console.log(response.body.results)
    this.setState({ pokeData: response.body.results });
  }

  componentWillMount = async () => {
    this.fetchPokemon();
  }

  handleSort1 = (e) => {
    this.setState({
        sort1: e.target.value,
      })
  }

  handleSort2 = (e) => {
      this.setState({
        sort2: e.target.value,
      })
  }

  handleSubmit = (e) => {
    this.fetchPokemon();
    // e.preventDefault()  
    // this.setState({
    //     submit: this.state.textChange,
// submit: this.state.textChange because that is the state we want to show and stop at.
      // })
  }

  handleChange = (e) => {
      // e.preventDefault()  
      this.setState({
        textChange: e.target.value,
      })
  }

  render() {

    return (
      <div>
        <Header />
        <Link to="/" className="links" >Home</Link>
        <Link to="/Search" className="links" >Search Page</Link>

        <Sort 
        handleSort1={this.handleSort1} 
        handleSort2={this.handleSort2} />

        <SearchBar 
        handleSubmit={this.handleSubmit} handleChange={this.handleChange}  />

        <PokeList 
        pokeData={this.state.pokeData} 
        sort1={this.state.booger1} 
        sort2={this.state.booger2} 
        changeProp={this.state.textChange} />
      </div>
    )
  }
}

/* took out of searchBar: pokeData={this.state.pokeData} */

// changeProp={this.state.change}

// https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.category}=${this.state.search}&sort=${this.state.sort}

// Styled ListPage Component (with react-router) that fetches characters by name on load (use componentDidMount)
// Add a fetchPokemon method to your List page. It should use state to make the correct fetch, based on the user's current selections.
// Fetch pokemon on Search (should sort and filter correctly, using the API)
// Add loading spinner to List page (on mount and on search)