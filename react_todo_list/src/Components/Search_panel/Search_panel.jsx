import React from 'react';
import ItemStatusFilter from './../Item_status_filter';
import s from './Search_panel.module.css';

export default class SearchPanel extends React.Component{
  render(){
    return(
      <div className={s.search_panel_container}>
        <input type="text" className={s.search_input} placeholder="Найти"/>
        <ItemStatusFilter/>
      </div>
    )
  }
}