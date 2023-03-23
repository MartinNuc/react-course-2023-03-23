import './App.css';
import {AutoCounter} from './use-effect/AutoCounter';
import {useState} from 'react';
import {Dropdown} from './dropdown/Dropdown';

function App() {
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  return <>

    <Dropdown />
    
  </>;
}

export default App;
