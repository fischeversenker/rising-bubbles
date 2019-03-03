const makeBubble = ({ left, size, color, duration, opacity, riseTo, delay, offset }) => {
  const cssPrefix = '--bubble-';
  const properties = {
    left: left + '%',
    color: color,
    size: size + 'px',
    riseTo: riseTo + 'px',
    offset: offset + 'px',
    opacity: opacity || Math.random(),
    delay: delay + 'ms',
    duration: (duration || Math.random() * 10000 + 2000) + 'ms',
  };

  const bubbleElement = document.createElement('div');
  bubbleElement.classList.add('bubble');

  Object.keys(properties).forEach((key) => {
    bubbleElement.style.setProperty(cssPrefix + key, properties[key]);
  });

  return bubbleElement;
}

document.addEventListener('DOMContentLoaded', () => {

  const rootElement = document.querySelector('#root');

  const theme1 = '#0099cc';
  const theme2 = '#9900cc';
  const theme3 = '#00cc99';
  const bubbleCountPerColor = 100;
  const bubbles = [];

  const colorWidth = rootElement.clientWidth / 3; // count of colors
  const spread = colorWidth * 2;

  // blueish
  for(let i = 0; i < bubbleCountPerColor; i++) {
    bubbles.push({
      color: theme1,
      size: (Math.random() * 13),
      opacity: Math.random() + 0.2,
      offset: Math.random() * spread - (spread / 2),
      riseTo: 400,
      left: (colorWidth / 2) / rootElement.clientWidth * 100,
      delay: Math.random() * 1000,
    });
  }

  // purple
  for(let i = 0; i < bubbleCountPerColor; i++) {
    bubbles.push({
      color: theme2,
      size: (Math.random() * 13),
      opacity: Math.random() * 0.5,
      offset: Math.random() * spread - (spread / 2),
      riseTo: Math.random() * 600,
      left: 50,
      delay: Math.random() * 1000,
    });
  }

  // greenish
  for(let i = 0; i < bubbleCountPerColor; i++) {
    bubbles.push({
      color: theme3,
      size: (Math.random() * 13),
      opacity: Math.random(),
      offset: Math.random() * spread - (spread / 2),
      riseTo: Math.random() * 800,
      left: (colorWidth * 3 - (colorWidth / 2)) / rootElement.clientWidth * 100,
      delay: Math.random() * 1000,
    });
  }

  for (let i = 0; i < bubbles.length; i++) {
    rootElement.appendChild(makeBubble(bubbles[i]));
  }

});
