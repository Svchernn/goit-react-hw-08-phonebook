import { useDispatch } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { userLogin } from 'redux/auth/auth-operations';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(191, 222, 184)',
  },
  title: {
    fontWeight: 500,
    textAlign: 'center',
    color: '#303f9f',
  },
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(userLogin(data));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
