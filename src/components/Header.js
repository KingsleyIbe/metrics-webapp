import { NavLink } from 'react-router-dom';
import {
  FaCog, FaLessThan, FaMicrophone,
} from 'react-icons/fa';
import Search from './Search';

const Header = () => (
  <header className="header">
    <nav className="d-flex flex-row">
      <div className="home-year">
        <NavLink className="nav-item-1 d-flex flex-row" to="/">
          <FaLessThan className="text-white lessthan-icon" />
          <h3 className="text-white logo">2022</h3>
        </NavLink>
      </div>
      <div className="search-input">
        {/* <FaSearch className="search-icon" /> */}
        {/* <input type="text" placeholder="Most views" className="search" /> */}
        <Search />
      </div>
      <FaMicrophone className="text-white mic-icon" />
      <NavLink className="nav-item" to="/settings">
        <FaCog className="text-white settings-icon" />
      </NavLink>
    </nav>
  </header>
);

export default Header;
