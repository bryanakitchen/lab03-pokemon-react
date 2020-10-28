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
                <select onChange={this.props.handleChangeHidden}>
                    <option value="">Show All Hidden Abilities</option>
                    <option value="chlorophyll">Chlorophyll</option>
                    <option value="solar-power">Solar Power</option>
                    <option value="rain-dish">Rain Dish</option>
                    <option value="run-away">Run Away</option>
                    <option value="NA">None</option>
                    <option value="sniper">Sniper</option>
                    <option value="big-pecks">Big Pecks</option>
                </select>

            </div>
        )
    }
}
