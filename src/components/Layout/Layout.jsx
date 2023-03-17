import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from 'components/Navigation/Navigation';
import NavAuth from 'components/Navigation/NavAuth/NavAuth';
import UserMenu from 'components/Navigation/UserMenu/UserMenu';
import { isUserLogin } from 'redux/auth/auth-selectors';

import css from './Layout.module.css';

const Layout = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div>
      <header className={css.navbar}>
        <Navigation />
        {!isLogin && <NavAuth />}
        {isLogin && <UserMenu />}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
