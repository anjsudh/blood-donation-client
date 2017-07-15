import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderBar extends Component {
    render() {
        return (
            <div className="pure-menu pure-menu-horizontal">
                <Link to={``} className="pure-menu-heading">Blood Donation System</Link>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><Link to={`/patients`} className="pure-menu-link">Patients</Link></li>
                    <li className="pure-menu-item"><Link to={`/donors`} className="pure-menu-link">Donors</Link></li>
                </ul>
            </div>
        );
    }
}

export default HeaderBar;