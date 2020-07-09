import React from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';

// import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
        <h1>the main container</h1>
        </div>
        )
    }
}

export default Main

// export default function Home() {
//   return (
//     <div className="container">
//       <h1>Home Page</h1>
//       <p>
//           hello
//         {/* <Link to="/taniarascia">taniarascia</Link> on GitHub. */}
//       </p>
//     </div>
//   )
// }