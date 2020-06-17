import React from 'react';

export default class ItemStatusFilter extends React.Component{
  buttons = [
    {className:'btn btn-outline-info', label:'Все', name: 'all'},
    {className:'btn btn-outline-success', label:'Завершенные', name: 'completed'},
    {className:'btn btn-outline-danger', label:'Важные', name: 'important'}
  ];

  render(){
    const {filter, onFilterChange} = this.props;
    return(
      <div className="btn-group">
        {
          this.buttons.map(({className, label, name}) => {
            if(filter === name) className += ' active';           
            return (<button key={label} 
                            type="button" 
                            className={className}
                            onClick={() => onFilterChange(name)}>{label}</button>)
          })
        }
      </div>
    )
  }
}