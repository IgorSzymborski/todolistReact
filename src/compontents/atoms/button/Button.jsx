import React from 'react';
import styles from '../button/Button.module.scss'

const Button = ({name, onClick, color, index, e}) => {
  return (
    <button onClick={(e) => onClick(e)} className={styles.button} style={{background: color}} id={index} e={e}> {name} </button>
  );
};

export default Button;