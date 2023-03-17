import { useDispatch } from 'react-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { userSingup } from 'redux/auth/auth-operations';

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

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSingup = data => {
    dispatch(userSingup(data));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>
      <RegisterForm onSubmit={handleSingup} />
    </div>
  );
};

export default RegisterPage;
