import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './containers/Sidebar'
import Main from './containers/Main'



export default class App extends React.Component {
  componentDidMount() {
    document.title = 'Amanda Escaba';
  }

  render() {
    return (
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-container container-fluid">
          <div className="row row-main"><Main /></div>
        </div>
      </div>
    )

  }
}