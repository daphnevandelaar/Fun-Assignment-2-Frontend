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
                    <div class="acc-content">
                        {invoice.content}
                    </div>
                </AccordionItem>
            </Accordion>
        )

        const mockItems = (
            <div>
               <Accordion>
                    <AccordionItem title="What is a dog?" expanded="testje">
                        <div class="acc-content">
                            Een beestje
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </AccordionItem> 
                    <AccordionItem title="What is a cat?" expanded="testje">
                        <div class="acc-content">
                            ook een beestje..
                            <i class="fas fa-trash-alt"></i>
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