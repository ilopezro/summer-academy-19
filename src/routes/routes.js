import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../components/App'
import AboutMe from "../components/AboutMe"
import ClassLinks from "../components/ClassLinks"
import Contact from "../components/Contact"
import hector from "../components/classLinks/hectorAndAlberto"
import Juan from "../components/classLinks/Juan/juan"

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/aboutMe" exact component={AboutMe} />
                <Route path="/classLinks" exact component={ClassLinks} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/classLinks/hectorAndAlberto" exact component={hector} />
                <Route path="/classLinks/juan" exact component={Juan} />
            </Switch>
        </BrowserRouter>
    )
}
