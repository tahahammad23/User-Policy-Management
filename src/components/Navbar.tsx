import navbarStyles from '../styles/navbar.module.css';
function Navbar()
{
  return (
    <nav>
      <p> User & Policy Management </p>
      <ul>
        <li> <a href="/">
          Dashboard</a>
          </li>
        <li><a href="/users">
          Users</a></li>
        <li><a href="/policies">
          Policies</a></li> 
      </ul>
    </nav>
    )
  }
export default Navbar;