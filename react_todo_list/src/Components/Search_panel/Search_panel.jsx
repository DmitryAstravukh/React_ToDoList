import React from 'react';
import ItemStatusFilter from './../Item_status_filter';
import s from './Search_panel.module.css';

export default class SearchPanel extends React.Component{
  state = {
    searchStr: ''
  }

  onSearchItems = (e) => {
    this.setState({searchStr: e.target.value});
    let s = this.props.search || (() => {});
    s(e.target.value);
  }

  render(){
    return(
      <div className={s.search_panel_container}>
        <input type="text" 
               className={s.search_input} 
               placeholder="Найти"
               value={this.state.searchStr} 
               onChange={this.onSearchItems}/>
        <ItemStatusFilter/>
      </div>
    )
  }
}