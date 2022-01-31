import { NavLink } from 'react-router-dom';
import {
  FaCog, FaLessThan, FaMicrophone, FaSearch,
} from 'react-icons/fa';

const Header = () => (
  <header className="header">
    <nav className="navItems">
      <NavLink
        className="nav-item"
        to="/"
      >
        {' '}
        <FaLessThan />
        {' '}
      </NavLink>
      <div>
        <FaSearch />
        <input type="text" placeholder="Search..." />
      </div>
      <FaMicrophone />
      <NavLink
        className="nav-item"
        to="/settings"
      >
        {' '}
        <FaCog />
        {' '}
      </NavLink>
    </nav>
  </header>
);

export default Header;
