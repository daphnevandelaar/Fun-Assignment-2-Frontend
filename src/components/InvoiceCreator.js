import React, { Component } from 'react'
import {CustomerOverview} from './CustomerOverview/CustomerOverview.js'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 

export default class InvoiceCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div>
        <h1>Factuur maken:</h1>
        <div class="container">
        
          <div class="row">

            <div class="col-sm">
              <h2>Diensten tab</h2>
              <input type="text" placeholder="Diensten zoeken"></input>
              <div>
                <ul>
                  <li>Dienst 1</li>
                  <li>Dienst 1</li>
                  <li>Dienst 1</li>
                  <li>Dienst 1</li>
                  <li>Dienst 1</li>
                  <li>Dienst 1</li>
                </ul>
              </div>
          </div>
          <div class="col-sm">
            <h2>Klanten tab</h2>
            <input type="text" placeholder="Klant zoeken"></input>
              <div>
                <ul>
                  <li>Klant 1</li>
                  <li>Klant 1</li>
                  <li>Klant 1</li>
                  <li>Klant 1</li>
                  <li>Klant 1</li>
                  <li>Klant 1</li>
                </ul>
              </div>
          </div>
          <div class="col-sm">
            <h2>Factuur tab</h2>
            <DatePicker
              todayButton={"Vandaag"}
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="dd/MM/yyyy"

            />
          </div>
        </div>
        </div>
      </div>
    )
  }
}
