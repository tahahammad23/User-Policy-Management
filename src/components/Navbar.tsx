import { NavLink } from 'react-router-dom';
import navbarStyles from '../styles/navbar.module.css';

function Navbar() {
  return (
    <nav className={navbarStyles.nav}>
      <div>
        <img src="logopro.png" alt="Logo" className={navbarStyles.logo} />
      </div>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/policies">Policies</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;