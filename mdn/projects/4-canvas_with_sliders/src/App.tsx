//
// src/App.tsx: Main file for the 4-canvas_with_sliders
// ----------------------------------------------------
//
// import React from 'react'   // Copied from main.tsx to fix "error"
import './App.css'

import { ChangeEvent, useState } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import Canvas from './Canvas.jsx';
// const Canvas = require('./Canvas');

// Important types
interface MySliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}
interface GrojaesqueImageProps {
  transparency: number;
  blueVsYellow: number;
  greenVsRed: number;
  bAndYVsGandR: number;
}
interface MySliderResultProps {
  slNo: number;
  slVal: number;
}

// Important constants
const defaultValue = 50;
const numberOfSliderCards = 4;      // Warning: Do not make this greater
                                    // than or equal to the number of
                                    // elements in grojaesqueImagePropNames!
const grojaesqueImagePropNames: readonly string[] = [
  "Transp",
  "B vs Y",
  "G vs R",
  "B&Y vs G&R",
];
const gridTopX = 10;      // X location of top left corner of grid
const gridTopY = 10;      // Y location of top left corner of grid
const squareSize = 15;    // Size of each square
const gridSize = 19;      // No. of squares in each row and column
const canvasWidth = ( squareSize * gridSize ) + ( 2 * gridTopX );
const canvasHeight = ( squareSize * gridSize ) + ( 2 * gridTopY );

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  const width = canvasWidth;
  const height = canvasHeight;

  // Paint it black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  let squareTopX = gridTopX;
  let squareTopY = gridTopY;
  let randomColorLetter = "B";
  
  for ( let row=0; row < gridSize; row++ ) {
    squareTopY = gridTopY + (row * squareSize);
    for ( let col=0; col < gridSize; col++ ){
      randomColorLetter = getRandomPrimaryColor();
    // console.log( "randomColorLetter = " + randomColorLetter );
      squareTopX = gridTopX + (col * squareSize);
      if ( randomColorLetter == "B" ) {
        context.fillStyle = "rgb(0, 0, 255, 1)";
      } else if ( randomColorLetter == "G" ) {
        context.fillStyle = "rgb(0, 255, 0, 1)";
      } else if ( randomColorLetter == "R" ) {
        context.fillStyle = "rgb(255, 0, 0, 1)";
      } else if ( randomColorLetter == "Y" ) {
        context.fillStyle = "rgb(255, 255, 0, 1)";
      } else {
        context.fillStyle = "rgb(255, 255, 255, 1)";
      }
      context.fillRect( squareTopX, squareTopY, squareSize, squareSize );
    }
  }
};

// getRandomPrimaryColor: return a single character, "B", "G", "R", or "Y"
function getRandomPrimaryColor() {
  const min = 0;
  const max = 4;
  const colorLetters = [ "B", "G", "R", "Y", ];
  const randomInt = Math.floor(Math.random() * (max - min) + min);
  const randomColorLetter = colorLetters[randomInt];
  return randomColorLetter;
}


// MySlider: function component interface to the MDBRange component
function MySlider( props:MySliderProps ) {
  const sliderLabel = grojaesqueImagePropNames[props.sliderNo] + ": " +  props.sliderVal;
  const sliderId = "myslider-" + Number(props.sliderNo);

  return (
    <>
      <MDBRange
        defaultValue={defaultValue}
        id={sliderId}
        label=""
        onChange={props.onSliderChange}
      />
      <p>{sliderLabel}</p>
    </>
  );
}

// MySliderCard: function component interface to the MDBRange component
function MySliderCard( props:MySliderProps ) {
  return (
    <div className="card">
      <MySlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )
}
// GrojaesqueImageRows: function component to display a grojaesque image
function GrojaesqueImageRows( props:GrojaesqueImageProps ) {
  const width = canvasWidth;
  const height = canvasHeight;

//           <canvas className="grojaesque-canvas" width="{canvasWidth}" height="{canvasHeight}">
//             <p>Oh no!  Your browser does not support basic graphics commands!!</p>
//             <p>Oh non! Votre navigateur ne prend pas en charge les commandes graphiques de base !!</p>
//             <p>¡Oh, no! ¡Su navegador no admite comandos básicos de gráficos!</p>
//             <p>Ach nein! Ihr Browser unterstützt keine grundlegenden Grafikbefehle!!</p>
//           </canvas>
  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-4 align-items-center">
          <div className="card grojaesque-canvas">
            <p>{grojaesqueImagePropNames[0]}: {props.transparency}</p>
            <p>{grojaesqueImagePropNames[1]}: {props.blueVsYellow}</p>
            <p>{grojaesqueImagePropNames[2]}: {props.greenVsRed}</p>
            <p>{grojaesqueImagePropNames[3]}: {props.bAndYVsGandR}</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card grojaesque-canvas">
            <Canvas draw={draw} width={width} height={height} />
          </div>
        </div>
      </div>
    </>
  );
}
// MySliderResultsCard: function component to display the slider values
function MySliderResultsCard( props:MySliderResultProps ) {
  return (
    <>
      <div className="card">
        <p>{grojaesqueImagePropNames[props.slNo]} slider = {props.slVal}</p>
      </div>
    </>
  );
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  const [values, setValues] = useState([defaultValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log("Value of slider in column " + col + " is now " + val);
    const nextValues = values.slice();
    nextValues[col] = Number(val);
    setValues(nextValues);
  }

  // Construct markup for a set of columns containing MySliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <MySliderCard
         sliderNo={col}
         sliderVal={values[col] ?? defaultValue}
         onSliderChange={ (evt) => handleChangeArrayOfNumbers(evt,col) }
        />
      </div>
    );
  }
  // Construct markup for a set of columns containing MySliderResultsCards
  const sliderResultCols = [];
  for ( let col = 0; col < numberOfSliderCards; col++ ) {
    sliderResultCols.push(
      <div key={col} className="col-md-3">
        <MySliderResultsCard
         slNo={col}
         slVal={values[col] ?? defaultValue}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mt-4 d-flex justify-content-center">
        <GrojaesqueImageRows
          transparency={values[0] ?? defaultValue}
          blueVsYellow={values[1] ?? defaultValue}
          greenVsRed={values[2] ?? defaultValue}
          bAndYVsGandR={values[3] ?? defaultValue} />
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        {sliderNumberCols}
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <h3><code>MySliderResultsCard</code>s - Obsolete??</h3>
        {sliderResultCols}
      </div>
    </div>
  )
}

// App: this App's "mainline" component
function App() {
  return (
    <>
      <h1><span className="fst-italic">"Groja-esque"</span> Image App</h1>
      <MyContainer />
    </>
  )
}

export default App
