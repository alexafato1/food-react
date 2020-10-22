import React from 'react'
import  './Menu.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Menu() {
    return (
        <div className='menu'>
              <nav className='menu__nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
            <li>
              <Link to="/Bookmarks">Bookmarks</Link>
            </li>
           
            <li>
              <Link to="/SearchRecipe">Find recipes by ingredients</Link>
            </li>
           
          </ul>
        </nav>
        </div>
    )
}

export default Menu
