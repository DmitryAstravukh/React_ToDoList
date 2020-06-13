import React from 'react';
import ToDoItem from './../ToDo_item';
import s from './ToDo_block.module.css';

const ToDoBlock = ({items}) => {
  
  return(
    <div className={s.todoitems_container}>
      {items.map(({id, ...itemProps}) => {
        return (
          <ToDoItem key={id}
                    itemProps={itemProps}/>
        )
      })}
    </div>
  )
}  


export default ToDoBlock;