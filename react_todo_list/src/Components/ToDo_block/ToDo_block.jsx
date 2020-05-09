import React from 'react';
import ToDoItem from './../ToDo_item';
import s from './ToDo_block.module.css';

export default class ToDoBlock extends React.Component {
  render() {
    return(
      <div className={s.todoitems_container}>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </div>
    )
  }   
}