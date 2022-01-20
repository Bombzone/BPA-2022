import React, { Component } from "react";

import { HashRouter as Router } from "react-router-dom";


import Home from "./Pages/home";
import Travel from "./Pages/travel";
import Energy from "./Pages/energy";
import Contact from "./Pages/contact"
import NoMatch from "./Pages/no-match";
import sources from "./Pages/sources";
//import Icons from "../helpers/icons";
//<NavigationContainer />

export default class App extends Component {
    constructor(props) {
        super(props);

//        Icons();
    }
    render() {
        return (
            <div className="container">
                <Router>
                    <div>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/travel" component={Travel} />
                            <Route path="/energy" component={Energy} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/sources" component={sources} />
                            <Route component={NoMatch} />

                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}