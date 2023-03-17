import { NavLink } from 'react-router-dom';
import css from './NavAuth.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : css.link;
};
const NavAuth = () => {
  return (
    <div>
      <NavLink className={getClassName} to="register">
        Register
      </NavLink>{' '}
      |
      <NavLink className={getClassName} to="login">
        Log in
      </NavLink>
    </div>
  );
};

export default NavAuth;
