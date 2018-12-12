import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import axios from 'axios';

import '../InvoiceOverview/InvoiceOverview.css';
import '../../accordionneke.css';

class InvoiceOverview extends Component {

    state = {
      invoices: []
      }
  
      componentDidMount() {
        axios.get(`http://localhost:9001/v1/invoices`)
          .then(res => {
            const invoices = res.data;
            this.setState({ invoices });
          })
      }

    render() {
      return (
        <div>
          <h1>Klanten overzicht</h1>
          <Accordion>
            { this.state.invoices.map(invoice => 
              <AccordionItem key={invoice.invoiceid} title={ invoice.invoiceid +" "+ invoice.customer.firstname} expanded={ invoice.customer.email }>
                <div className="acc-content">
                    Totale prijs: €{invoice.totalprice} 
                    <br/>
                    Prijs Inclusief BTW: €{invoice.totalpriceInclTax}
                    <br/>
                    {invoice.tasks.taskid}
                    <i className="fas fa-trash-alt"></i>
                </div>
              </AccordionItem>          
            )}
          </Accordion>    
        </div>
      )
    }
}

export default InvoiceOverview;
