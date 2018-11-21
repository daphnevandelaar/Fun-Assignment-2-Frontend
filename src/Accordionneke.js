import React, { Component } from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';


export default class Accordionneke extends Component {
  render() {
    return (
        <Accordion>
          <AccordionItem class="acc-item" title="What is a dog?" expanded="testje">
              <div class="acc-content">Een beestje</div>
          </AccordionItem>
          <AccordionItem title="What is a cat?" expanded="testje">
              <div>ook een beestje..</div>
          </AccordionItem>
        </Accordion>
      );
  }
}

