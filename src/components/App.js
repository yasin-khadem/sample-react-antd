import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <h2>home</h2>}></Route>
                    <Route path="/about" render={() => <h2>about</h2>}></Route>
                </Switch>
            </div>
        );
    };
}