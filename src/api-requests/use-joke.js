import axios from 'axios';
import {useState, useEffect} from 'react';

export function useJoke() {
  const [joke, setJoke] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  function fetchJoke() {
    setIsLoading(true);
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
        setJoke(response.data.value);
        setIsLoading(false);
      });
  }

  return {
    joke,
    isLoading,
    loadNext: fetchJoke,
  }
}