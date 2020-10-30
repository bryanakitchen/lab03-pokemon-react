import React from 'react'

export default class Sort extends React.Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleChangeAbility}>
                    <option value="">Show All Abilities</option>
                    <option value="pokemon">Name</option>
                    <option value="base_experience">Base Experience</option>
                    <option value="ability_1">Ability</option>
                    <option value="ability_hidden">Hidden Ability</option>
                    <option value="shape">Shape</option>
                    <option value="height">Height</option>
                    <option value="weight">Weight</option>
                </select>
                <select onChange={this.props.handleChangeHidden}>
                    <option value="">Order</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        )
    }
}
// need new drop down for asc/desc
// value of options "asc" or "desc"
// change to the keys