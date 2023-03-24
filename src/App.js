import './App.css';
import {AutoCounter} from './use-effect/AutoCounter';
import {useState} from 'react';
import {Dropdown} from './dropdown/Dropdown';
import {Table} from './table/Table';
import {MousePosition} from './use-effect/MousePosition'

function App() {
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  return <>
    <Dropdown onDropdownOpened={() => console.log('opened')} />
    
  </>;
}

export default App;
