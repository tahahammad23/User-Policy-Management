import  '../styles/navbar.module.css';
function Navbar()
{
  return (
    <nav>
      <div>
        <img src="logopro.png" alt="" />
      </div>
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