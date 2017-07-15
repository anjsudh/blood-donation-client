/**
 * Created by anjana-2492 on 7/15/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
class HomePage  extends Component {
    render() {
        return (
            <div className="pure-u-xl-1-1">
                <h2 className="tagline">
                    Welcome to the Blood Donation 2k17!
                </h2>
                <Link to={`/patients`}  className="pure-button pure-button-primary">
                    I'm a Patient
                </Link>
                <Link to={`/donors`}  className="pure-button pure-button-primary">
                    I'm a Donor
                </Link>
            </div>
        );
    }
}

export default HomePage;