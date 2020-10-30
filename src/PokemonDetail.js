import React from 'react'
import Header from './Header.js';
import PokeList from './PokeList.js';
// import pokemonData from './Data.js';
import Sort from './Sort.js';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import fetch from 'superagent';

export default class PokemonDetail extends React.Component {
  state = {
      characteristic: '',
      order: '',
      submit: '',
      change: '',
      pokeData: [],
  }
  
  fetchPokemon = async () => {
    console.log(this.state.change)
      const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.change}&sort=${this.state.characteristic}&direction=${this.state.order}`);
      // if one state is empty, it will just ignore or show all
      // console.log(response.body.results)
      this.setState({ pokeData: response.body.results });
  }

  componentDidMount = async () => {
    this.fetchPokemon();
  }

  handleCharPoke = async (e) => {
    await this.setState({
        characteristic: e.target.value,
      })
    await this.fetchPokemon();
  }

  handleOrderPoke = async (e) => {
    await this.setState({
        order: e.target.value,
      })
    await this.fetchPokemon();
  }

  handleSubmit = (e) => {
    this.fetchPokemon();
    e.preventDefault()  
    this.setState({
        submit: this.state.change,
// submit: this.state.change because that is the state we want to show and stop at.
      })
  }

  handleChange = (e) => {
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
        <Link to="/pokemon/:pokemon" className="links" >Detail Page</Link>
        
        <Sort 
        handleChar={this.handleCharPoke} 
        handleOrder={this.handleOrderPoke} />

        <SearchBar 
        handleSubmit={this.handleSubmit} handleChange={this.handleChange} pokeData={this.state.pokeData} />

        <PokeList 
        pokeData={this.state.pokeData} 
        submitProp={this.state.submit} />
      </div>
    )
  }
}
