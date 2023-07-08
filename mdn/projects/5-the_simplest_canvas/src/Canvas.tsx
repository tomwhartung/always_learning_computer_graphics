import React from 'react';

interface CanvasProps {
// draw:  (context: CanvasRenderingContext2D) => void;
  draw: any;
  onClick: any;
  width: number;
  height: number;
}

const Canvas = ( { draw, onClick, width, height }: CanvasProps ) => {
  const canvas = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    if ( canvas.current ) {
      const context = canvas.current.getContext('2d');
      draw(context);
    }
  });

  return (
    <canvas
      ref={canvas}
      onClick={onClick}
      width={width}
      height={height}
    />
  )
};

export default Canvas;
