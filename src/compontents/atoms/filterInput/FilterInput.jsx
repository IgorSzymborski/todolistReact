import React from 'react';
import styles from '../filterInput/FilterInput.module.scss'

const FilterInput = ({onChange}) => {
  return (
    <input
      className={styles.input}
      placeholder='Filter by name...'
      onChange={onChange}
    ></input>
  );
};



export default FilterInput;