import './App.css';
import {AutoCounter} from './use-effect/AutoCounter';
import {useState} from 'react';

function App() {
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  return <>
    <button onClick={() => setIsCounterVisible(!isCounterVisible)}>
      toggle
    </button>
    {isCounterVisible && <AutoCounter />}
  </>;
}

export default App;
