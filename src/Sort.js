import React from 'react'

export default class Sort extends React.Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleSort1}>
                    <option value="">Sort By</option>
                    <option value="pokemon">Name</option>
                    <option value="ability_1">Ability</option>
                    <option value="ability_hidden">Hidden Ability</option>
                    <option value="shape">Shape</option>
                </select>
                <select onChange={this.props.handleSort2}>
                    <option value="">Order</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
        )
    }
}
