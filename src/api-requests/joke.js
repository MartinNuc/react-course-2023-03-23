import { useContext } from 'react';
import { useJoke } from './UseJoke';
import { ThemeContext } from '../App';
import { useParams } from 'react-router-dom';

export const Joke = () => {
  const { category } = useParams();
  const { joke, loadNext, isLoading } = useJoke(category);
  const { currentTheme, toggle } = useContext(ThemeContext);

  return <>
    {currentTheme}
    <button onClick={toggle}>toggle theme</button>
    <p>{isLoading ? 'Wait for it...' : joke}</p>
    <button onClick={loadNext}>another joke, please</button>
  </>
}