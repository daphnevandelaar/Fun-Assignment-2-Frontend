import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

import '../InvoiceOverview/InvoiceOverview.css';
import '../../accordionneke.css';

class InvoiceOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            invoices: []
        }
    }

    render() {
        const invoiceItems = this.state.invoices.map(
            invoice =>
            <Accordion>
                <AccordionItem title={invoice.title} expanded={invoice.id}>
                    <div className="acc-content">
                        {invoice.content}
                    </div>
                </AccordionItem>
            </Accordion>
        )

        const mockItems = (
            <div>
               <Accordion>
                    <AccordionItem title="What is a dog?" expanded="testje">
                        <div className="acc-content">
                            Een beestje
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </AccordionItem> 
                    <AccordionItem title="What is a cat?" expanded="testje">
                        <div className="acc-content">
                            ook een beestje..
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        )

        return (
        <div>
            <h1>Facturen overzicht:</h1>
                <div>
                    {mockItems}
                </div>
                {invoiceItems}
        </div>
        )
    }
}

export default InvoiceOverview;