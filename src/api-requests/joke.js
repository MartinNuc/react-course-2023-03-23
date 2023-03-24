import { useContext } from 'react';
import { useJoke } from './use-joke';
import { ThemeContext } from '../App';

export const Joke = () => {

  const { joke, loadNext, isLoading } = useJoke();
  const {currentTheme, toggle} = useContext(ThemeContext);

  return <>
    {currentTheme}
    <button onClick={toggle}>toggle theme</button>
    <p>{isLoading ? 'Wait for it...' : joke}</p>
    <button onClick={loadNext}>another joke, please</button>
  </>
}