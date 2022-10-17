import React from 'react';
import Button from '../../atoms/button/Button';
import PaginationButton from '../../atoms/paginationButton/PaginationButton';
import ToDo from '../../molecules/toDo/ToDo';
import styles from '../toDoList/ToDoList.module.scss'

const ToDoList = ({filteredList, deleteClick, editClick, disabled, inputValue, onChange, indexItem, toggle, saveClick, e, paginationIncreaseClick, paginationDecreaseClick, pagination}) => {
  
  return (
    <div>
      <ul className={styles.ulContainer}>
        {filteredList.slice(0, pagination).map((item, index)=>(
          <ToDo
            taskName={item.task}
            taskDate={item.date.slice(0, 15)}
            key={item.id}
            deleteClick={() => deleteClick(item.id)}
            editClick={() => editClick(item.id)}
            disabled={disabled}
            inputValue={inputValue}
            onChange={onChange}
            index={index}
            indexItem={indexItem}
            toggle={toggle}
            saveClick={() => saveClick(item.id)} e={e}/>
        ))}
      </ul>
      {/* <button onClick={paginationIncreaseClick}>More</button>
      <button onClick={paginationDecreaseClick}>Less</button> */}
      <PaginationButton onClick={paginationIncreaseClick} name='More...' />
      <PaginationButton onClick={paginationDecreaseClick} name='Less...' />
    </div>
  );
};


export default ToDoList;