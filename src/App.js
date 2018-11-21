import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import InvoiceOverview from './components/InvoiceOverview/InvoiceOverview';
import InvoiceCreator from './components/InvoiceCreator';
import Accordionneke from './Accordionneke';

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
            </div>
            <div>
              {/* <Accordionneke/> */}
            </div>
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
