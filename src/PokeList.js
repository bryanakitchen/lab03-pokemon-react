import React from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {
        return (
            <div className="group">
                {
                    this.props.pokemonProp.filter((item) => {
                        if (!this.props.abilityProp) return true;
                        if (item.ability_1 === this.props.abilityProp) return true;
                        return false;
                    })
                    .filter((item) => {
                        if (!this.props.hiddenAbilityProp) return true;
                        if (item.ability_hidden === this.props.hiddenAbilityProp) return true;
                        return false;
                    })

                    .map(pokemon => {
                    return <PokeItem name={pokemon.pokemon} url={pokemon.url_image} ability={pokemon.ability_1} hidden={pokemon.ability_hidden} shape={pokemon.shape} />
                    })
                }
            </div>
        )
    }
}
