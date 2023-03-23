import { useState } from 'react';

export const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  return <button onClick={() => setCounter(counter + 1)}>
    {counter}x clicked
  </button>
}