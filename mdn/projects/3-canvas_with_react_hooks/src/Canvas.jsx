import React from 'react';

// import PropTypes from 'prop-types'; // Added in Step 4

const Canvas = ( {draw} ) => {     // Changed in Step 4
  const canvas = React.useRef();   // Added useRef in Step 2

  // Added useEffect in Step 3:
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context); // Added in Step 4
  });

  return (
    <canvas
      ref={canvas}   // Added ref in Step 2
      width="100"
      height="100"
    />
  )
};

// Added in Step 4
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
// };

export default Canvas;
