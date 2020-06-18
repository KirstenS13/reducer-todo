import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state in App', state);

  return (
    <div className="App">
      <h1>Welcome to the Todo App</h1>
      <div className="componentContainer">
        <TodoForm dispatch={dispatch}/>
        <TodoList dispatch={dispatch} todos={state.todos}/>
      </div>
    </div>
  );
}

export default App;
