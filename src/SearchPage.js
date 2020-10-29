import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';


export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Link to="/" className="links">Return Home</Link>
                <p>Search for Pokemon</p>

            </div>
        )
    }
}
