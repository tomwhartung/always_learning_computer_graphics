import React from 'react';

const Canvas = () => {
  const canvas = React.useRef();

  return (
    <canvas
      ref={canvas}
      width="100"
      height="100"
    />
  )
};

export default Canvas;
