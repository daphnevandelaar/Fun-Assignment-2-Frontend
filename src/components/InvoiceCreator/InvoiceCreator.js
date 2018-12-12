import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import Customers from './Customers';
import Tasks from './Tasks';

import "react-datepicker/dist/react-datepicker.css";
import './invoicecreator.css'

export default class InvoiceCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      fromTasks: '',
      customerId: 0
    };
  }

  handleData(data) {
    this.setState({
      fromTasks: data
    });
  }

  updateInvoice(id){
    console.log("Triggereddd");
    console.log(id);
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
        <div className="container">
          <div className="row">
          <div className="col-sm">
            <Tasks/>
          </div>
          <div className="col-sm">
            <Customers triggerParentUpdate={this.updateInvoice}/>
          </div>
          <div className="col-sm">
            <h2>Factuur</h2>
            <DatePicker
              todayButton={"Vandaag"}
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="dd/MM/yyyy"
            />
            
            <div className="rightbottomcorner">
              <input type="submit"/>  
              <h5>{this.state.fromTasks}</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
