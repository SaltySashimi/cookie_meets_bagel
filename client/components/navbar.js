import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Navbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout"><span className="glyphicon glyphicon-log-out"></span> Sign Out</Link>
        </li>
      )
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin"><span className="glyphicon glyphicon-log-in"></span> Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Cookie Meets Bagels</Link>
          </div>
          {/* <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
          </ul> */}
          <ul className="nav navbar-nav navbar-right">
            {this.renderLinks()}
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
              <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Page 1-1</a></li>
                <li><a href="#">Page 1-2</a></li>
                <li><a href="#">Page 1-3</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Navbar);
