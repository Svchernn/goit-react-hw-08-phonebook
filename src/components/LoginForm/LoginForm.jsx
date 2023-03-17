import css from './LoginForm.module.css';
import initialState from './initialState';
import useForm from 'shared/hooks/useForm';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
import Button from 'shared/components/Button/Button';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(initialState, onSubmit);
  const { email, password } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Log in</Button>
    </form>
  );
};

export default LoginForm;
