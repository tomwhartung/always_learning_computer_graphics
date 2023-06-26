import React from 'react';

const Canvas = () => {
  const canvas = React.useRef();   // Added useRef in Step 2

  // ADDED useEffect in Step 3:
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
  });

  return (
    <canvas
      ref={canvas}   // Added ref in Step 2
      width="100"
      height="100"
    />
  )
};

export default Canvas;
