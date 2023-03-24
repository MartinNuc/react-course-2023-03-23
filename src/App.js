import './App.css';
import {AutoCounter} from './use-effect/AutoCounter';
import {useState} from 'react';
import {Dropdown} from './dropdown/Dropdown';
import {Table} from './table/Table';
import {MousePosition} from './use-effect/MousePosition'
import {Joke} from './api-requests/joke';

function App() {
  return <>
    <Joke />
    
  </>;
}

export default App;
