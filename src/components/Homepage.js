import React from 'react';
import { usePosition } from 'use-position';

export default function Homepage() {
  
  const watch = true;
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);

  return (
    <div>
      <code className='Max-w-5xl mx-auto'>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {timestamp}<br/>
        accuracy: {accuracy && `${accuracy}m`}<br/>
        error: {error}
      </code>
    </div>
  );
};