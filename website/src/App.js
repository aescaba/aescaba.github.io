import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './containers/Sidebar'
import Main from './containers/Main'

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Sidebar />
      <Main />
      </Router>
    )
  
}}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
