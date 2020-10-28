import React from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.pokemonProp.map(pokemon => {
                    return <PokeItem name={pokemon.pokemon} url={pokemon.url_image} ability={pokemon.ability_1} hidden={pokemon.ability_hidden} shape={pokemon.shape} />
                    })
                }
            </div>
        )
    }
}
