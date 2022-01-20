import React, { Component } from "react";
import NavContainer from "./nav-container"
import TitleContainer from "./title-container";

export default class MainContainer extends Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                <TitleContainer />
                <NavContainer />
            </div>
        );
    }
}