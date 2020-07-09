import React from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
        <h1>Home Page</h1>
        <p>
            hello this is the homepage
        </p>
        </div>
        )
    }
}

export default Home

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