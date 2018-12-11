import React, { Component } from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';
import axios from 'axios';

class CustomerOverview extends Component {

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
        <h1>Klanten overzicht</h1>
        <Accordion>
          { this.state.customers.map(customer => 
            <AccordionItem title={ customer.firstname +" "+ customer.lastname} expanded={ customer.email }>
              <div className="acc-content">
                  {customer.email} 
                  <br/>
                  {customer.phonenumber}
                  <i className="fas fa-trash-alt"></i>
              </div>
            </AccordionItem>          
          )}
        </Accordion>    
      </div>
    )
  }
}

export default CustomerOverview;