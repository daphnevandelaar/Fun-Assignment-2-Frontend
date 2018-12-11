import React, { Component } from 'react'
import axios from 'axios';

import './CustomerCreator.css';

export default class CustomerCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      place: '',
      address: '',
      email: '',
      phoneNumber: ''
    };
  }

  handleClick = () => {
    axios.post(`http://localhost:9001/v1/customers`, 
      { 
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        streetname: this.state.address,
        address: this.state.address,
        place: this.state.place,
        email: this.state.email,
        phonenumber: this.state.phoneNumber 
      })
      .then(function(response){
        console.log('saved successfully')
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="form-horizontal" role="form">
          <h2>Klant aanmaken</h2>
          <div className="form-group">
            <label htmlFor="firstName" className="col-sm-3 control-label">Voornaam</label>
              <div className="col-sm-9">
                  <input type="text" id="firstName" placeholder="Voornaam" onChange={this.handleChange} className="form-control" autoFocus/>
              </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="col-sm-3 control-label">Achternaam</label>
              <div className="col-sm-9">
                  <input type="text" id="lastName" placeholder="Achternaam" onChange={this.handleChange} className="form-control" autoFocus/>
              </div>
          </div>
          <div className="form-group">
            <label htmlFor="place" className="col-sm-3 control-label">Plaats</label>
              <div className="col-sm-9">
                  <input type="place" id="place" placeholder="Plaats" onChange={this.handleChange} className="form-control" autoFocus/>
              </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="col-sm-3 control-label">Adres</label>
              <div className="col-sm-9">
                  <input type="address" id="address" placeholder="Adres" onChange={this.handleChange} className="form-control" autoFocus/>
              </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label">Email</label>
              <div className="col-sm-9">
                  <input type="email" id="email" placeholder="Email" onChange={this.handleChange} className="form-control" autoFocus/>
              </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="col-sm-3 control-label">Telefoonnummer</label>
              <div className="col-sm-9">
                  <input type="phoneNumber" id="phoneNumber" onChange={this.handleChange} placeholder="Telefoonnummer" className="form-control" autoFocus/>
              </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleClick}>Aanmaken</button>
        </div>
      </div>
            
    )
  }
}
