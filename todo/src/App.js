import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <div className="App">
      <h1>Welcome to the Todo App</h1>
      <TodoForm dispatch={dispatch}/>
      <TodoList todos={state.todos}/>
    </div>
  );
}

export default App;
