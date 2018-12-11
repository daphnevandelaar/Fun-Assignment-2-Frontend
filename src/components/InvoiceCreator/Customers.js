import React, { Component } from 'react'
import axios from 'axios';

class Customers extends Component {

  handleClick(id, event){
    console.log(id);
    console.log(event);
  }
  state = {
    customers: []
  }

  componentDidMount() {
    axios.get(`http://localhost:9001/v1/customers`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
  }

  render() {
    return (
      <div>
        <h2>Klanten</h2>
        <input type="text" placeholder="Klant zoeken"></input>  <input type="submit" value="zoeken"></input>
              <div>
                <ul className="list-group">
                  { this.state.customers.map(customer => 
                    <li key={customer.id} className="list-group-item"> {customer.firstname} {customer.lastname} 
                      <div className= "right" value={customer.id} id={customer.id} onClick={(e) => this.handleClick(customer.id ,e)}>
                        <i className="fas fa-plus clickable"/>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              <ul>


      </ul>
      </div>
    )
  }
}
export default Customers;