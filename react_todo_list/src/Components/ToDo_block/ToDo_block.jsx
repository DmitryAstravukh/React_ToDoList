import React from 'react';
import ToDoItem from './../ToDo_item';
import s from './ToDo_block.module.css';

const ToDoBlock = ({items, onToggleDone, onToggleImportant, onDelete}) => { 
  return(
    <div className={s.todoitems_container}>
      {items.map(({id, ...itemProps}) => {
        return (
          <ToDoItem key={id}
                    {...itemProps}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onDelete={() => onDelete(id)}/>
        )
      })}
    </div>
  )
}  


export default ToDoBlock;