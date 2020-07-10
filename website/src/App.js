import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './containers/Sidebar'
import Main from './containers/Main'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Main />
      </div>
    )

  }
}