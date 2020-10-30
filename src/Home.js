import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Link to="/" className="links" >Home</Link>
                <Link to="/Search" className="links" >Search Page</Link>
            </div>
        )
    }
}
