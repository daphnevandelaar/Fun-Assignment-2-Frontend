import React, { Component } from 'react'
import {CustomerOverview} from './CustomerOverview/CustomerOverview.js'

export default class InvoiceCreator extends Component {
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

          </div>
        </div>
      </div>
    )
  }
}
