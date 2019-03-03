import React from 'react';
import './Bubble.css';

export default ({ left, size, color, duration, opacity, riseTo, delay, offset }) => {

  left = left || 50;
  size = size || 13;
  color = color || 'rebeccapurple';
  duration = duration || Math.random() * 10000 + 2000;
  offset = offset || Math.random() * 100 - 50;
  opacity = opacity || Math.random();
  riseTo = riseTo || 400;
  delay = delay || 500;

  return (
    <div
      className='bubble'
      style={{
        '--bubble-left': `${left}%`,
        '--bubble-size': `${size}px`,
        '--bubble-color': color,
        '--bubble-duration': `${duration}ms`,
        '--bubble-offset': `${offset}px`,
        '--bubble-delay': `${delay}ms`,
        '--bubble-opacity': opacity,
        '--bubble-rise-to': `${riseTo}px`,
      }}></div>
  );
}
