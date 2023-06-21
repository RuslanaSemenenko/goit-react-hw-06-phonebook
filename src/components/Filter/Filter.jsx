import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import styles from './Filter.module.jsx';

const Filter = ({ value, onChangeFilter }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.value;
    dispatch(addFilter(name));
    onChangeFilter(name);
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
