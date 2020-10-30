import React from 'react'
import PokeItem from './PokeItem.js';

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
                    this.props.pokeData.filter((item) => {
                        if (!this.props.abilityProp) return true;
                        if (item.ability_1 === this.props.abilityProp) return true;
                        return false;
                    })
                    
                    .filter((item) => {
                        if (!this.props.hiddenAbilityProp) return true;
                        if (item.ability_hidden === this.props.hiddenAbilityProp) return true;
                        return false;
                    })

                    .filter((item) => {
                        if (!this.props.submitProp) return true;
                        if (item.pokemon === this.props.submitProp) return true;
                        return false;
                    })

                    .filter((item) => {
                        if (!this.props.changeProp) return true;
                        if (item.pokemon === this.props.changeProp) return true;
                        return false;
                    })

                    .map(pokemon => {
                    return <PokeItem 
                    name={pokemon.pokemon} 
                    url={pokemon.url_image} 
                    ability={pokemon.ability_1} 
                    hidden={pokemon.ability_hidden} 
                    shape={pokemon.shape} />
                    })
                    }
                    </div>
                }
            </div>
        )
    }
}
