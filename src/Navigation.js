import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <span className="navbar-brand" href="#"><img src="http://i64.tinypic.com/10p8tpe.png" class="Factura-Logo" alt="Logo"></img></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            { this.props.isLoggedIn ? <NavItem name={"Facturen overzicht"} to={"invoiceOverview"} /> : null }
            { this.props.isLoggedIn ? <NavItem name={"Factuur maken"} to={"invoiceCreator"} /> : null }
          </ul>
        </div>
      </nav>
    );
  }
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <Link to={props.to} className="nav-link" href="#">{props.name}</Link>
    </li>
  );
}

export default Navigation;