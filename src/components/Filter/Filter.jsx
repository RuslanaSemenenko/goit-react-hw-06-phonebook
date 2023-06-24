import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import styles from './Filter.module.jsx';
import { getFilter } from 'redux/selectors.js'

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.value;
    dispatch(addFilter(name));
  };

  return (
    <div className={styles.Filter_box}>
      <p className={styles.Filter_title}>Find contacts by name</p>
      <input
        className={styles.Filter_input}
        type="text"
        autoComplete="off"
        value={value}
        onChange={handleChange}
        name="name"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
