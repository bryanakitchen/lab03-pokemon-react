import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import ListPage from './ListPage.js';
import PokemonDetail from './PokemonDetail.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/Search" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon/:pokemonProp" 
                            exact
                            render={(routerProps) => <PokemonDetail {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}