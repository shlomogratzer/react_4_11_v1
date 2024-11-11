
// import Left from "./left/Left"

import { Link } from "react-router-dom"

// import Right from "./right/Right"
const Header = () => {
  
  return (
    <header >
      <h1>Hello to my app</h1>
      <ul>
        <li><Link to='/users' className="li">Users</Link></li>
        <li><Link to='/users/addUser' className="li">addUser</Link></li>
        <li><Link to='/users/update' className="li">update</Link></li>
        <li><Link to='/users/elected' className="li">elected</Link></li>
      </ul>
    </header>
  )
}

export default Header
