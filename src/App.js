import './App.css';
import React, { Component }  from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
     <TodoList/>
    </div>
  );
}

export default App;
