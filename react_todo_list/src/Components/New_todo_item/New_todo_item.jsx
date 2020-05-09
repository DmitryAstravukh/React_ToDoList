import React from 'react';
import s from './New_todo_item.module.css';

export default class NewTodoItem extends React.Component{
  render(){
    return(
      <div className={s.new_item_container}>
        <form action="" className={s.new_item_form}>
          <input type="text" className={s.new_item_input} placeholder="Добавить" autoFocus/>
          <button type="submit" className="btn btn-outline-secondary">Добавить</button>
        </form>
        
      </div>
    )
  }
}