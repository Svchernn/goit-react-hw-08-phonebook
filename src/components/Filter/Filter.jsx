import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        value={filter}
        name="filter"
        onChange={handleFilter}
        pleceholder="Find by name"
      />
    </form>
  );
};

export default Filter;
