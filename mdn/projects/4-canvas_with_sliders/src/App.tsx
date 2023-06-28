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
const canvasWidth = 300;
const canvasHeight = 300;

const draw = (context: CanvasRenderingContext2D) => {
  const width = canvasWidth;
  const height = canvasHeight;

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
