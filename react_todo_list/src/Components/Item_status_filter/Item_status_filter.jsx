import React from 'react';

export default class ItemStatusFilter extends React.Component{
  render(){
    return(
      <div className="btn-group">
        <button type="button" className="btn btn-outline-info active">Все</button>
        <button type="button" className="btn btn-outline-success">Завершенные</button>
        <button type="button" className="btn btn-outline-danger">Важные</button>  
      </div>
    )
  }
}