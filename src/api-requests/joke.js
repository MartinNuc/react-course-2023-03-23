import { useJoke } from './UseJoke';
import { useParams } from 'react-router-dom';
import React from 'react';

export const Joke = React.memo(function Joke() {
  const { category } = useParams();
  const { joke, loadNext, isLoading } = useJoke(category);

  return <>
    <p>{isLoading ? 'Wait for it...' : joke}</p>
    <button onClick={loadNext}>another joke, please</button>
  </>
});