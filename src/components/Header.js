import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink className={classes.logo} to='/home'>
          Shpend's Portfolio
        </NavLink>

        <div className={classes.menu}>
          <ul>
            <li>
              <NavLink className={classes.link} to='/home'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.link} to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.link} to='/projects'>
                Personal Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.link} to='/blog'>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.link} to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
