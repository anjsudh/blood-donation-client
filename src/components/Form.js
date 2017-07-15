/**
 * Created by anjana-2492 on 7/15/2017.
 */
import React, { Component } from 'react';
class FormPage extends Component {
    render() {
        return (
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input id="first-name" className="pure-u-23-24" placeholder="First Name" type="text" required/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input id="last-name" className="pure-u-23-24" placeholder="Last Name" type="text" required/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <select id="bloodGroup" className="pure-input-1-2" required>
                                <option>B-G</option>
                                <option>A+</option>
                                <option>B+</option>
                                <option>O+</option>
                                <option>AB+</option>
                                <option>A-</option>
                                <option>B-</option>
                                <option>O-</option>
                                <option>AB-</option>
                            </select>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input id="email" className="pure-u-23-24" type="email" placeholder="E-mail" required/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input id="phoneNumber" className="pure-u-23-24" placeholder="Phone Number" type="text" required/>
                        </div>
                    </div>
                    <inpput id="submit-button" type="button" className="pure-button pure-button-primary" value="Register to Donate">Register to Donate</inpput>
                </fieldset>
            </form>
        );
    }
}

export default FormPage;