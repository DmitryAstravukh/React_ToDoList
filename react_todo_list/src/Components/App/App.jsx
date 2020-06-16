import React from 'react';
import SearchPanel from './../Search_panel';
import ToDoBlock from './../ToDo_block';
import NewToDoItem from './../New_todo_item';
import s from './App.module.css';

export default class App extends React.Component {
  idCnt = 4;

  state = {
    items:[
      {id: 1, text: "Get up", important: false, done: false},
      {id: 2, text: "Wash face", important: false, done: false},
      {id: 3, text: "Drink water", important: false, done: false},
    ],
    searchStr: ''
  };

  toggleProperty = (array, id, propName) => {
    const index = array.findIndex(item => item.id === id);
    const oldItem = array[index];
    const value = !oldItem[propName];
    //console.dir(`oldItem - ${oldItem}, value - ${value}`);
    const item = {...array[index], [propName]: value};
    return [
      ...array.slice(0, index),
      item,
      ...array.slice(index + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'done');
      return {items};
    });
  };

  onToggleImportant = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'important');
      return {items};
    });
  };

  onDeleted = (id) => {
    this.setState((state) => {
      let index = state.items.findIndex(item => item.id === id);    
      let items = [...state.items.slice(0, index),
                   ...state.items.slice(index + 1)];
      return {items};
    })
  }

  onItemAdded = (text) => {
    this.setState((state) => {
      let newItem = {id: this.idCnt++, text, important: false, done: false};
      let items = [...state.items, newItem];
      return {items};
    })
  }

  onChangeSearchStr = (str) => {
    this.setState({searchStr: str})
  }

  searchItems = (items, text) => {
    if(text.length === 0){
      return items
    }

    return items.filter((item) => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    })
  }

  render() {
    const {items, searchStr} = this.state;
    const visibleItems = this.searchItems(items, searchStr);
    return(
      <div className={s.todo_container}>
        <div className={s.todo}>
          <SearchPanel search={this.onChangeSearchStr}/>
          <ToDoBlock items={visibleItems}
                     onToggleDone={this.onToggleDone}
                     onToggleImportant={this.onToggleImportant}/>
          <NewToDoItem add={this.onItemAdded}/>
        </div>      
      </div>
    )
  }   
}

