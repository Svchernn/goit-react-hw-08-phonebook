import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { items } from './navigationItems';
import css from './Navigation.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : css.link;
};

const Navigation = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={getClassName} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default Navigation;
