import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../components/App'
import AboutMe from "../components/AboutMe"
import ClassLinks from "../components/ClassLinks"
import Contact from "../components/Contact"

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/aboutMe" exact component={AboutMe} />
                <Route path="/classLinks" exact component={ClassLinks} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}
