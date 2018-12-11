import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import InvoiceOverview from './components/InvoiceOverview/InvoiceOverview';
import InvoiceCreator from './components/InvoiceCreator/InvoiceCreator';
import CustomerOVerview from './components/CustomerOverview/CustomerOverview';
import CustomerCreator from './components/CustomerCreator/CustomerCreator';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <div className="App">
            <Navigation isLoggedIn={this.state.isLoggedIn} />

            <div className="container">
              <Route path='/invoiceOverview' component={InvoiceOverview}/>
              <Route path='/invoiceCreator' component={InvoiceCreator}/>
              <Route path='/CustomerOverview' component={CustomerOVerview}/>
              <Route path='/CustomerCreator' component={CustomerCreator}/>
            </div>
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
