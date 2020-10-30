import React from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {
        
        const filteredPoke = this.props.pokeData;
        const sorting2 = this.props.booger2;
            if(this.props.booger1 === 'ascending') {
                filteredPoke.sort(function(a, b) {
                    if(sorting2 === 'pokemon' || sorting2 === 'ability_1') {
                        return a[sorting2].localeCompare(b[sorting2])
                    } else {
                        return a[sorting2] - b[sorting2];
                    }
                })
            } else {
                filteredPoke.sort(function(a, b) {
                    if(sorting2 === 'pokemon' || sorting2 === 'ability_hidden') {
                        return b[sorting2].localeCompare(a[sorting2])
                    } else {
                        return b[sorting2] - a[sorting2];
                    }
                })
            }
        
        return (
            <div className="group">
                {
                    filteredPoke.length === 0
                    // if pokedata is 0, return this gif
                    ? <iframe src="https://giphy.com/embed/HtqFbL7el09oY" width="480" height="358" frameBorder="0" title="hereismytitle" className="giphy-embed" allowFullScreen></iframe>
                    // else show me the money
                    : <div className="group"> 
                    {
                    // this.props.pokeData.filter((item) => {
                    //     if (!this.props.abilityProp) return true;
                    //     if (item.ability_1 === this.props.abilityProp) return true;
                    //     return false;
                    // })
                    
                    // .filter((item) => {
                    //     if (!this.props.hiddenAbilityProp) return true;
                    //     if (item.ability_hidden === this.props.hiddenAbilityProp) return true;
                    //     return false;
                    // })

                    // .filter((item) => {
                    //     if (!this.props.submitProp) return true;
                    //     if (item.pokemon === this.props.submitProp) return true;
                    //     return false;
                    // })

                    // .filter((item) => {
                    //     if (!this.props.changeProp) return true;
                    //     if (item.pokemon === this.props.changeProp) return true;
                    //     return false;
                    // })

                    filteredPoke.map(pokemon => {
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
