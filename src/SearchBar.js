import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                 <form onSubmit={this.props.handleSubmit}>
                     <input type="text" onChange={this.props.handleChange} />
                     <button>Search</button>
                 </form>
            </div>
        )
    }
}
