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
      characteristic: '',
      order: '',
      submit: '',
      change: '',
      pokeData: [],
      pageNumber: 1,
      loading: false,
  }
  
  fetchPokemon = async () => {
      this.setState({ loading: true })
      const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.change}&sort=${this.state.characteristic}&direction=${this.state.order}&page=${this.state.pageNumber}&perPage=20`);
      // if one state is empty, it will just ignore or show all
      this.setState({ 
        pokeData: response.body.results,
        loading: false,
        count: response.body.count 
      });
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

  handleDecrement = async (e) => {
    await this.setState({
      pageNumber: this.state.pageNumber - 1,
    })
    await this.fetchPokemon();
}

  handleIncrement = async (e) => {
    await this.setState({
      pageNumber: this.state.pageNumber + 1,
    })
    await this.fetchPokemon();
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
        
        <div className="page-nav">
          <button onClick={this.handleDecrement}>Previous</button>
          <button onClick={this.handleIncrement}>Next</button>
          <br />
          <p>Page {this.state.pageNumber} of {Math.ceil(this.state.count / 20)} </p>
        </div>
        
        <PokeList 
        pokeData={this.state.pokeData} 
        submitProp={this.state.submit} />
      </div>
    )
  }
}
