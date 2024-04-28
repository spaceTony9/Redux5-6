import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilter, setFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const filterTodo = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <input
      value={filterTodo}
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};
