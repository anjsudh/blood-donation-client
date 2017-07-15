import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import HomePage from "./components/home"
import MapComponent from "./components/donor-map"

import "./index.css";
import HeaderBar from "./components/header";
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()


ReactDOM.render(

    <Provider>
        <BrowserRouter history={history}>

            <div>
                <HeaderBar/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/donors" component={MapComponent}/>
                <Route path="/patients" component={MapComponent}/>
            </div>
        </BrowserRouter>
    </Provider>,document.getElementById('root')
)