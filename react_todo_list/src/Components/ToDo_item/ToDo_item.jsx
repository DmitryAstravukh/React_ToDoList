import React from 'react';
import s from './ToDo_item.module.css';


const ToDoItem = ({text, important, done, onToggleDone}) => {

  let itemClassName = s.todo_item;
  if(important) itemClassName = [itemClassName, s.important].join(' ');
  if(done) itemClassName = [itemClassName, s.done].join(' ');
  
  return(   
    <div className={itemClassName}>
      <span className="text-left">{text}</span>
      <div className="btn-group">
        <button type="button" 
                className="btn btn-success"
                onClick={onToggleDone}>ok</button>
        <button type="button" className="btn btn-warning">!</button>
        <button type="button" className="btn btn-danger">del</button>
      </div>     
    </div>
  )
     
}

export default ToDoItem;