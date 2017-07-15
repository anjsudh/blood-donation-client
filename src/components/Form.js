/**
 * Created by anjana-2492 on 7/15/2017.
 */
import React, { Component } from 'react';
class FormPage extends Component {
    render() {
        return (
            <form name="donorDetails" className="pure-form pure-form-stacked">
                <fieldset>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input id="firstName" name="firstName" className="pure-u-23-24" placeholder="First Name" type="text" required/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input id="lastName" name="lastName" className="pure-u-23-24" placeholder="Last Name" type="text" required/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <select name="bloodGroup" className="pure-input-1-2" required>
                                <option value="">B-G</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="O+">O+</option>
                                <option value="AB+">AB+</option>
                                <option value="A-">A-</option>
                                <option value="B-">B-</option>
                                <option value="O-">O-</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input name="emailAddress" className="pure-u-23-24" type="email" placeholder="E-mail" required/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <input name="contactNumber" className="pure-u-23-24" placeholder="Phone Number" type="text" required/>
                        </div>
                    </div>
               </fieldset>
            </form>
        );
    }
}

export default FormPage;