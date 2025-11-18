import { Link, NavLink } from 'react-router-dom';
import  '../styles/navbar.module.css';
function Navbar()
{
  return (
    <nav>
      <div>
        <img src="logopro.png" alt="" />
      </div>
      <ul>
        <li> <NavLink to="/">
          Dashboard</NavLink>
          </li>
        <li><NavLink to="/users">
          Users</NavLink></li>
        <li><NavLink to="/policies">
          Policies</NavLink></li> 
      </ul>
    </nav>
    )
  }
export default Navbar;