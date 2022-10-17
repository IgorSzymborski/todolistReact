import React from 'react';
import styles from '../paginationButton/PaginationButton.module.scss'


const PaginationButton = ({name, onClick}) => {
  return (
    <button onClick={onClick} className={styles.btn}>{name}</button>
  );
};



export default PaginationButton;