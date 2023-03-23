import {useState, useEffect} from 'react';

export const AutoCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalReference = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
    
    return () => clearInterval(intervalReference);
  }, []);

  return <div>Counter: {counter}</div>
}