import React from 'react';
import FilterInput from '../../atoms/filterInput/FilterInput';
import SortButton from '../../atoms/sortButton/SortButton';
import FormWrapper from '../../molecules/formWrapper/FormWrapper';
import styles from '../header/Header.module.scss'

const Header = ({onClick, sortClick, onChange, inputValue, list, filterChange}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__h1}>
        {list.length > 0 ? 'Add task' : 'No task'}
        
      </h1>
      <div>
        <SortButton onClick={sortClick} name='Sort'/>
        <FilterInput onChange={filterChange} />
      </div>
      <div className={styles.header__inputContainer}>
        <FormWrapper onClick={onClick} onChange={onChange} inputValue={inputValue}/>
      </div>
    </header>
  )
}


export default Header;