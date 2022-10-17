import React from 'react';
import Button from '../../atoms/button/Button';
import styles from '../toDo/ToDo.module.scss';

const ToDo = ({taskName, taskDate, deleteClick, editClick, disabled, inputValue, onChange, saveClick}) => {
 
  return (
    <li className={styles.liContainer}>
        <input 
          type='text' 
          className={styles.liContainer__taskName} 
          value={disabled ? taskName : inputValue} 
          onChange={onChange}
          disabled={disabled}
        />
        <div className={styles.liContainer__dateContainer}>
          <p>{taskDate}</p>
        </div>
        <div className={styles.liContainer__btnContainer}>
          <Button name='Save' color='yellow' onClick={saveClick} />
          <Button name='Edit' onClick={editClick} color='orange'  /> 
          <Button name='Delete' onClick={deleteClick} color='red' />
        </div>
      </li>
  );
};


export default ToDo;