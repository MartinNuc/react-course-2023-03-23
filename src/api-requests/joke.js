import axios from 'axios';
import {useState, useEffect} from 'react';

export const Joke = () => {
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetchJoke();
  }, []);

  function fetchJoke() {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      setJoke(response.data.value)
    });
  }

  return <>
    <p>{joke}</p>
    <button onClick={fetchJoke}>another joke, please</button>
  </>
}