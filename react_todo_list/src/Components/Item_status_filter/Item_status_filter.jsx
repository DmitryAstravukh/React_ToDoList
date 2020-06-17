import React from 'react';

export default class ItemStatusFilter extends React.Component{
  buttons = [
    {className:"btn btn-outline-info", label:"Все", isActive: true, onClick: ""},
    {className:"btn btn-outline-success", label:"Завершенные", isActive: false, onClick: ""},
    {className:"btn btn-outline-danger", label:"Важные", isActive: false, onClick: ""}
  ];

  render(){
    return(
      <div className="btn-group">
        {
          this.buttons.map(({className, label, isActive}) => {
            if(isActive) className += ' active';           
            return (<button key={label} type="button" className={className}>{label}</button>)
          })
        }
      </div>
    )
  }
}