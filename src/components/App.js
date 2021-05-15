import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from '../Pages/Home/Home'
import NoMatch from "../Pages/404";

const App = () => {

    return (<>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/about' render={() => <h1>about</h1>}/>
            <Route path='/' component={Home} />
            <Route path='*' component={NoMatch}/>
        </Switch>
    </>);
}

export default App;