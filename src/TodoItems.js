import React from 'react';

export default function TodoItems({ entries, deletion }) {
  let createTasks = item => 
    <li onClick={ () => deletion(item.key) } key={item.key}>{ item.text }</li>

  const listItems = entries.map(createTasks)
  
  return (
    <ul className="theList">
      { listItems }
    </ul>
  );
}
