import { useState, useEffect } from 'react';
import style from './MousePosition.module.css';

export const MousePosition = () => {

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [lastClickCoordinates, setLastClickCoordinates] = useState(null);

  useEffect(() => {
    const handler = (event) => setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
    window.addEventListener('mousemove', handler);

    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useEffect(() => {
    const handler = (event) => setLastClickCoordinates({
      x: coordinates.x,
      y: coordinates.y,
    });
    
    window.addEventListener('click', handler);

    return () => window.removeEventListener('click', handler);
  }, []);

  const isCursorOnTheLeftFromLastClick = coordinates.x < lastClickCoordinates?.x;

  return <div>
    <div className={isCursorOnTheLeftFromLastClick ? style.green : style.red}>
      COLORFUL TEXT
    </div>
    <h1>Current position</h1>
    <div>X: {coordinates.x}</div>
    <div>Y: {coordinates.y}</div>
    <h1>Last click position</h1>
    {lastClickCoordinates ? (
        <>
          <div>X: {lastClickCoordinates.x}</div>
          <div>Y: {lastClickCoordinates.y}</div>
        </> 
      ) : (
        <div>No click</div>
      )
    }
    
  </div>
}