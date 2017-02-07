import React, { Component } from 'react';
import Navbar from './navbar';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
