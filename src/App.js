import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TourList from './components/TourList'; // automatically imports index.js from TourList

import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
