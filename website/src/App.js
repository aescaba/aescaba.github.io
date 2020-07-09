import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './Sidebar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Sidebar />
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} /> */}
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
