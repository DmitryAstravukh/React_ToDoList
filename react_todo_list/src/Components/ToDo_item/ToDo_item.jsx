import React from 'react';
import s from './ToDo_item.module.css';

export default class ToDoItem extends React.Component {
  render() {
    return(
      <div className={s.todo_item}>
        <span className="text-left">dsfsdfdsf</span>
        <div className="btn-group">
          <button type="button" className="btn btn-success">ok</button>
          <button type="button" className="btn btn-danger">!</button>
        </div>     
      </div>
    )
  }   
}