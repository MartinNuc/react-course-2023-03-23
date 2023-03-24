import {useJoke} from './use-joke';

export const Joke = () => {

  const { joke, loadNext, isLoading } = useJoke();

  return <>
    <p>{isLoading ? 'Wait for it...' : joke}</p>
    <button onClick={loadNext}>another joke, please</button>
  </>
}