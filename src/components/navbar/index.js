import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = (props) => {
  // setTimeout(()=>{
  //   props.history.push('/abuot')
  // },3000)
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="#" class="brand-logo">Logo</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;