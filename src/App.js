import React, { Component } from 'react';
import './App.css';
import PatientMap from "./patient/patient";
import MapHeader from "./header/header";

class App extends Component {
  render() {
    return (
        <div>
          <MapHeader></MapHeader>
          <PatientMap className="PatientMap"/>
        </div>
    );
  }
}

export default App;
