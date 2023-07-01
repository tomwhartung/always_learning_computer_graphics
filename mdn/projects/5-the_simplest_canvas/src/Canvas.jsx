import React from 'react';

// import PropTypes from 'prop-types';

const Canvas = ( {draw, onClick, width, height} ) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context); // Added in Step 4
  });

  return (
    <canvas
      ref={canvas}
      onClick={onClick}
      width={width}
      height={height}
    >
      <p>Oh no!  Your browser does not support basic graphics commands!!</p>
      <p>Oh non! Votre navigateur ne prend pas en charge les commandes graphiques de base !!</p>
      <p>¡Oh, no! ¡Su navegador no admite comandos básicos de gráficos!</p>
      <p>Ach nein! Ihr Browser unterstützt keine grundlegenden Grafikbefehle!!</p>
    </canvas>
  )
};

// Added in Step 4
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
// };

export default Canvas;
