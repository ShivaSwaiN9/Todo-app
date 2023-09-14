import './App.css';
import React, { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, SetListTodo] = useState([]); //TodoList #2
  let addlist = (InputText) => {
    if(InputText !== '')
    SetListTodo([...listTodo, InputText]);
  }

  const deleteListItem = (key)=>{
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key,1)
    SetListTodo([...newlistTodo])

  }
  return (
  <div className="main-container">
    <div className="center-container">
<TodoInput addlist={addlist}/>

<h1 className="app-heading">Todo-List
</h1>
<hr/>

{listTodo.map((listItem, i)=>{
  return(
<TodoList key={i} index={i} deleteItem={deleteListItem} item={listItem}/>
  )
})}

    </div>
  </div>
  );
}

export default App;
