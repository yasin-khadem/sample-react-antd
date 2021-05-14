import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from "../Pages/Login/Login";
class App extends React.Component {
    render() {
        return (<>
            <Login />
            {/*<Switch>*/}
            {/*    <Route exact path='/' render={() => <h1>home</h1>} />*/}
            {/*    <Route path='/about' render={() => <h1>about</h1>} />*/}
            {/*</Switch>*/}
        </>);
    }
}

export default App;