import React from 'react';
import s from './New_todo_item.module.css';

export default class NewTodoItem extends React.Component{

  state = {
    text: ''
  }

  onChangeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  addNewItem = (e) => {
    e.preventDefault();
    this.setState({text: ''})
    let add = this.props.add || (() => {});
    add(this.state.text);
  }

  render(){
    return(
      <div className={s.new_item_container}>
        <form action="" className={s.new_item_form} onSubmit={this.addNewItem}>
          <input type="text" 
                 className={s.new_item_input} 
                 placeholder="Добавить"
                 value={this.state.text}
                 onChange={this.onChangeText}/>
          <button type="submit" 
                  className="btn btn-outline-secondary">Добавить</button>
        </form>
        
      </div>
    )
  }
}