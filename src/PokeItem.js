import React from 'react';

// this is the template.
// this.props.WORD is booger that you will use in PokeList. from PokeList you refer to WORD={individualWord.dataWord}. 

export default class PokeItem extends React.Component {
    render() {
        return (
            <div className="unit">
                <h3 className="name">{this.props.name}</h3>
                <img className="picture" src={this.props.url} alt={this.props.name} ></img>
                <p className="ability">Ability: {this.props.ability}</p>
                <p className="hidden-ability">Hidden Ability: {this.props.hidden}</p>
                <p className="shape">Shape: {this.props.shape}</p>
            </div>
        )
    }
}
