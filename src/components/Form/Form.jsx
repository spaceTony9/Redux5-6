import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoSlice.js';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {

  const dispath = useDispatch();

  function onFormSubmit(e) {
    const id = nanoid();
    e.preventDefault();
    dispath(addTodo({
      id,
      todo: e.target.elements.search.value.trim(),
    }));
    e.target.reset();
  }

  return (
    <form className={style.form} onSubmit={onFormSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
