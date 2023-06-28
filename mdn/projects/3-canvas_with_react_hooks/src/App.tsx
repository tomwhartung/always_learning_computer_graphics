//
// 3-canvas_with_react_hooks/src/App.tsx: Taking a step back!
// ----------------------------------------------------------
// Reference:
//   https://dev.to/masakudamatsu/how-to-use-html-canvas-with-react-hooks-2j47
//
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

// import Canvas from './Canvas.jsx'
const Canvas = require('./Canvas');

const width = 333;
const height = 333;
const draw = (context: CanvasRenderingContext2D) => {
  // Paint it black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Add an opaque red rectangle at (50,50) that is 100 px wide and 150 px tall
  context.fillStyle = "rgb(255, 0, 0)";
  context.fillRect(50, 50, 100, 150);
  // Add an opaque green rectangle at (75,75) that is 100 px wide and 100 px tall
  context.fillStyle = "rgb(0, 255, 0)";
  context.fillRect(75, 75, 100, 100);

  // Add a translucent purple rectangle at (25,100) that is 175 px wide and 150 px tall
  context.fillStyle = "rgba(255, 0, 255, 0.75)";
  context.fillRect(25, 100, 175, 50);
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Canvas draw={draw} width={width} height={height} />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
