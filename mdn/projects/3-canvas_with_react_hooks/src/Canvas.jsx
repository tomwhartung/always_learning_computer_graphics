import React from 'react';

// import PropTypes from 'prop-types'; // Added in Step 4

const Canvas = ( {draw, width, height} ) => {   // Changed in Steps 4 and 5
  const canvas = React.useRef();                // Added useRef in Step 2

  // Added useEffect in Step 3:
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context); // Added in Step 4
  });

  return (
    <canvas
      ref={canvas}       // Added ref in Step 2
      width={width}      // Added width prop in Step 5
      height={height}    // Added height prop in Step 5
    />
  )
};

// Added in Step 4
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
// };

export default Canvas;
