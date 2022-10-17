import React from 'react';
import Header from '../../organisms/header/Header';
import ToDoList from '../../organisms/toDoList/ToDoList';
import styles from '../mainTemplate/MainTemplate.module.scss';
import { useState, useEffect } from 'react';

const MainTemplate = props => {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [sort, setSort] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [inputTask, setInputTask] = useState('')
  const [indexItem, setIndexItem] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [pagination, setPagination] = useState(3)
  
 
  useEffect(() => {
    if(localStorage.getItem('todolist') !== null){
      let prevItems = JSON.parse(localStorage.getItem('todolist') || [])
      setList(prevItems)
      setFilteredList(prevItems)
      
    }
  }, [])

  useEffect(() => {
    if(list.lenght > 0){
      localStorage.setItem('todolist', JSON.stringify(list))
    }
  }, [list])

 

  const increasePagination = () => {
    if(list.length >= pagination){
      setPagination(prevState => prevState + 3)
    } else {
      return
    }
  }

  const decreasePagination = () => {
    if(pagination > 3){
      setPagination(prevState => prevState - 3)
    } else {
      return
    }
  }

  
  const sortTasks = () => {
    setSort(true)

    const sortList = list.sort((a,b) => 
      new Date(b.date) - new Date(a.date)
    )
   
    if(sort){
      setFilteredList([...sortList])
    } else{
      setFilteredList([...list])
    }
    
  }
    
  const filterChange = (e) => {
    const filterValue = e.target.value
    
    const filteredArray = list.filter( (task) =>{
     return task.task.substr(0, 3).toLowerCase() === filterValue.substr(0, 3).toLowerCase()
    })

    if(filteredArray.length > 0){
      setFilteredList(filteredArray)
    } else{
      setFilteredList(list)
    }
  }

  const handleInputChange = (e) =>{
    setInputValue(e.target.value)
  }

  const handleTaskInputChange = (e) => {
    setInputTask(e.target.value)
}

  const handleAddTask = () =>{
    let newDate = new Date()
    let text = newDate.toString()
  
    const newTask = {
      task: inputValue,
      id: Math.random() * 2,
      date: text,
    }
    
    if(inputValue !== ''){
      list.push(newTask);
      filteredList.push(newTask)
      setInputValue('')
    } else {
      return
    }
    localStorage.setItem('todolist', JSON.stringify(list))



  }


  const handleDeleteTask  = (id) =>{
    const filteredArray = list.filter((item) => {
      return item.id !== id
    })
    setList(filteredArray)
    setFilteredList(filteredArray)
    if(filteredArray.length <= 0){
      localStorage.removeItem('todolist')
    } else{
    localStorage.setItem('todolist', JSON.stringify(filteredArray))
    }
  }


  const handleEditTask = (id, e) => {
    setDisabled(false)
    setToggle(true)
  }
  const handleSaveTask = (id) => {
    const editItem = list.find((item) => {
      return item.id === id
    })
    editItem.task = inputTask

    setDisabled(true)
    setToggle(false)
  }

  return (
    <div className={styles.container}>
      <Header 
        onClick={handleAddTask} 
        onChange={handleInputChange} 
        inputValue={inputValue}
        list={list}
        sortClick={sortTasks}
        filterChange={filterChange}
        />

      <ToDoList 
        filteredList={filteredList} 
        deleteClick={handleDeleteTask} 
        editClick={handleEditTask} 
        disabled={disabled} 
        inputValue={inputTask} 
        onChange={handleTaskInputChange} 
        indexItem={indexItem} 
        toggle={toggle} 
        saveClick={handleSaveTask}
        paginationIncreaseClick={increasePagination}
        paginationDecreaseClick={decreasePagination}
        pagination={pagination}
        />
    </div>
  );
};

export default MainTemplate;