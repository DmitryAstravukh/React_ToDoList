import React from 'react';
import SearchPanel from './../Search_panel';
import ToDoBlock from './../ToDo_block';
import NewToDoItem from './../New_todo_item';
import s from './App.module.css';

export default class App extends React.Component {
  render() {
    return(
      <div className={s.todo_container}>
        <div className={s.todo}>
          <SearchPanel/>
          <ToDoBlock/>
          <NewToDoItem/>
        </div>
        
      </div>
    )
  }   
}

