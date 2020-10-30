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
  
  fetchPokemon = async () => {
    console.log(this.state.change)
      const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.change}&sort=${this.state.ability}&direction=${this.state.hidden}`);
      // if one state is empty, it will just ignore or show all
      // console.log(response.body.results)
      this.setState({ pokeData: response.body.results });
  }

  componentDidMount = async () => {
    this.fetchPokemon();
  }

  handleChangeAbility = (e) => {
      this.setState({
        ability: e.target.value,
      })
      console.log(e.target.value);

  }

  handleChangeHidden = (e) => {
      this.setState({
        hidden: e.target.value,
      })
      console.log(e.target.value);

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
      e.preventDefault()  
      this.setState({
        change: e.target.value,
      })
      console.log(e.target.value);
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
