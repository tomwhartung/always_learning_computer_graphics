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
// GrojaesqueImageProps: values that come from the sliders
interface GrojaesqueImageProps {
  opacityValue: number;           // [0 .. 100]
  blueVsYellowValue: number;      // [0 .. 100]
  greenVsRedValue: number;        // [0 .. 100]
  bAndYVsGandRValue: number;      // [0 .. 100]
}
// GrojaesqueImagePercents: slider values as percentages, used to create the image
interface GrojaesqueImagePercents {
  opacityPercent: number;           // [0.0 .. 1.0]
  blueVsYellowPercent: number;      // [0.0 .. 1.0]
  greenVsRedPercent: number;        // [0.0 .. 1.0]
  bAndYVsGandRPercent: number;      // [0.0 .. 1.0]
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
  "Opacity%",
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

// ******************************************************************************************
// globalProps: A TEMPORARY GLOBAL variable to be replaced by a Context whatever in Project 5
// ******************************************************************************************
const globalProps: GrojaesqueImagePercents = {
  opacityPercent: valueToPct( defaultValue ),
  blueVsYellowPercent: valueToPct( defaultValue ),
  greenVsRedPercent: valueToPct( defaultValue ),
  bAndYVsGandRPercent: valueToPct( defaultValue ),
}

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  const width = canvasWidth;
  const height = canvasHeight;
  const innerSquareWidth = canvasWidth - ( 2 * gridTopX );
  const innerSquareHeight = canvasHeight - ( 2 * gridTopY );

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Paint the inner square white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(gridTopY, gridTopY, innerSquareWidth, innerSquareHeight);

  let squareTopX = gridTopX;
  let squareTopY = gridTopY;
  let randomColorLetter = "B";
  const opacityPercent = globalProps.opacityPercent;
  console.log( "draw: globalProps.opacityPercent = " + globalProps.opacityPercent );
  console.log( "draw: opacityPercent = " + opacityPercent );

  for ( let row=0; row < gridSize; row++ ) {
    squareTopY = gridTopY + (row * squareSize);
    for ( let col=0; col < gridSize; col++ ){
      randomColorLetter = getRandomPrimaryColor();
    // console.log( "randomColorLetter = " + randomColorLetter );
      squareTopX = gridTopX + (col * squareSize);
      if ( randomColorLetter == "B" ) {
        context.fillStyle = "rgba(0, 0, 255, " + opacityPercent + ")";
      } else if ( randomColorLetter == "G" ) {
        context.fillStyle = "rgba(0, 255, 0, " + opacityPercent + ")";
      } else if ( randomColorLetter == "R" ) {
        context.fillStyle = "rgba(255, 0, 0, " + opacityPercent + ")";
      } else if ( randomColorLetter == "Y" ) {
        context.fillStyle = "rgba(255, 255, 0, " + opacityPercent + ")";
      } else {
        context.fillStyle = "rgb(255, 255, 255, " + opacityPercent + ")";
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
// valueToPct: convert a slider value [0 - 100] to a percentage of opacity [0.0 - 1.00]
function valueToPct( value: number ) : number {
  const percent = value / 100;
  return ( percent );
}
// GrojaesqueImageCards: function component to display a grojaesque image
function GrojaesqueImageCards( props:GrojaesqueImageProps ) {
  const width = canvasWidth;
  const height = canvasHeight;
  globalProps.opacityPercent = valueToPct( props.opacityValue );

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-4 align-items-center">
          <div className="card grojaesque-canvas">
            <p>{grojaesqueImagePropNames[0]}: {props.opacityValue}</p>
            <p>{grojaesqueImagePropNames[1]}: {props.blueVsYellowValue}</p>
            <p>{grojaesqueImagePropNames[2]}: {props.greenVsRedValue}</p>
            <p>{grojaesqueImagePropNames[3]}: {props.bAndYVsGandRValue}</p>
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
        <GrojaesqueImageCards
          opacityValue={values[0] ?? defaultValue}
          blueVsYellowValue={values[1] ?? defaultValue}
          greenVsRedValue={values[2] ?? defaultValue}
          bAndYVsGandRValue={values[3] ?? defaultValue} />
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
