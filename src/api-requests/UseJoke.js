import axios from 'axios';
import {useState, useEffect} from 'react';

export function useJoke(category) {
  const [joke, setJoke] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, [category]);

  function fetchJoke() {
    setIsLoading(true);
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category || ''}`)
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