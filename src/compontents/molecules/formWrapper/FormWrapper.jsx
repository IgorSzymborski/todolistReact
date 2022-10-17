import React from 'react';
import Button from '../../atoms/button/Button';
import styles from './FormWrapper.module.scss'

const FormWrapper = ({onClick, onChange, inputValue}) => {
 
  return (
    <div className={styles.inputContainer}>
      <input 
      placeholder='Add task...' 
      className={styles.inputContainer__input} 
      onChange={onChange}
      value={inputValue}
      >
      </input>
      <Button onClick={onClick} name='Add' color='green' />
    </div>
  )
}

export default FormWrapper;