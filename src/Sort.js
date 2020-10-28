import React from 'react'

export default class Sort extends React.Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleChangeAbility}>
                    <option value="">Show All Abilities</option>
                    <option value="overgrow">Overgrow</option>
                    <option value="blaze">Blaze</option>
                    <option value="torrent">Torrent</option>
                    <option value="shield-dust">Shield Dust</option>
                    <option value="shed-skin">Shed Skin</option>
                    <option value="swarm">Swarm</option>
                    <option value="keen-eye">Keen Eye</option>
                </select>
            </div>
        )
    }
}
