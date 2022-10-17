import React from 'react';
import styles from '../sortButton/SortButton.module.scss'
const SortButton = ({name, onClick}) => {
  return (
    <button onClick={() => onClick()} className={styles.btn}>{name}</button>
  );
};

 

export default SortButton;