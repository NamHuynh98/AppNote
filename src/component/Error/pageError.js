import React, { Component } from 'react';
import Img from "./monitor-1350918_960_720.png";
import "./pageError.css";
export default class pageError extends Component {
    render() {
        return (
            <div className="error">
                <img className="img-error" src={Img} alt="page 404"/>
            </div>
        )
    }
}
