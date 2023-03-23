import { useState } from 'react';

export const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return <button onClick={handleClick}>
    {counter}x clicked
  </button>
}