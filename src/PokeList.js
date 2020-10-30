import React from 'react'
import PokeItem from './PokeItem.js';
import { Link } from 'react-router-dom';

export default class PokeList extends React.Component {
    render() {
        return (
            <div className="group">
                {
                    this.props.pokeData.length === 0
                    // if pokedata is 0, return this gif
                    ? <iframe src="https://giphy.com/embed/HtqFbL7el09oY" width="480" height="358" frameBorder="0" title="hereismytitle" className="giphy-embed" allowFullScreen></iframe>
                    :
                    // else show me the money
                    <div className="group"> 
                    {
                    this.props.pokeData.map(pokemon => 
                    { return (
                    <Link to={`pokemon/${pokemon.pokemon}`} >   
                    <PokeItem 
                    name={pokemon.pokemon} 
                    url={pokemon.url_image}
                    baseExperience={pokemon.base_ability}
                    ability={pokemon.ability_1} 
                    hidden={pokemon.ability_hidden} 
                    shape={pokemon.shape}
                    height={pokemon.height}
                    weight={pokemon.weight} />
                    </Link>)
                    })
                    }
                    </div>
                }
            </div>
        )
    }
}
