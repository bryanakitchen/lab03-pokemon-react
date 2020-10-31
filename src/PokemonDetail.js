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
    //   pokemon: props.match.params.pokemonProp,
      pokeData: '',
  }
  
  componentDidMount = async () => {
    console.log(this.state.change)
      const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonProp}`);
      // if one state is empty, it will just ignore or show all
      // console.log(response.body.results)
      this.setState({ pokeData: response.body.results });
  }

// pokemonArray[0] instead of mapping 

  render() {

    return (
      <div>
        <Header />
        <Link to="/" className="links" >Home</Link>
        <Link to="/Search" className="links" >Search Page</Link>

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
