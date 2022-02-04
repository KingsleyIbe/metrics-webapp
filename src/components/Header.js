import { NavLink } from 'react-router-dom';
import {
  FaCog, FaLessThan, FaMicrophone,
} from 'react-icons/fa';

const Header = () => (
  <header className="header">
    <h1 className="header-h1">COVID-19 WORLD UPDATE</h1>
    <nav className="d-flex flex-row">
      <div className="home-year">
        <NavLink className="nav-item-1 d-flex flex-row" to="/">
          <FaLessThan className="text-white lessthan-icon" />
          <h3 className="text-white logo">2022</h3>
        </NavLink>
      </div>
      <FaMicrophone className="text-white mic-icon" />
      <NavLink className="nav-item" to="/settings">
        <FaCog className="text-white settings-icon" />
      </NavLink>
    </nav>
  </header>
);

export default Header;
