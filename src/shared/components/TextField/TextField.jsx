import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import css from './TextField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div>
      <label htmlFor={id} className={css.label}>
        {label}
        <input className={css.input} onChange={handleChange} {...props} />
      </label>
    </div>
  );
};

export default TextField;
