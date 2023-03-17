import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { userLogout } from 'redux/auth/auth-operations';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(userLogout());
  };
  return (
    <div className={css.wrap}>
      <p className={css.username}>Welcome, {name}</p>
      <button className={css.itemBtn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
