//
// src/App.tsx: Main file for the 2-grojaesque-proof_of_concept
// ------------------------------------------------------------
//
import './App.css'

import { ChangeEvent, useState } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

// Important types
interface MySliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}
interface GrojaesqueImageProps {
  transparency: number;
  blueYellowVsGreenRed: number;
  blueVsYellow: number;
  greenVsRed: number;
}
interface MySliderResultProps {
  slNo: number;
  slVal: number;
}

// Important constants
const defaultValue = 50;
const numberOfSliderCards = 4;      // Warning: Do not make this greater
                                    // than or equal to the number of
                                    // elements in ordinalsArray!
const ordinalsArray: readonly string[] = [
  "Zeroeth",
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
  "Eleventh",
  "Twelfth",
  "Thirteenth",
  "Fourteenth",
];

// MySlider: function component interface to the MDBRange component
function MySlider( props:MySliderProps ) {
  const sliderLabel = ordinalsArray[props.sliderNo + 1] + " MySlider Component";
  const sliderId = "myslider-" + Number(props.sliderNo);

  return (
    <>
      <MDBRange
        defaultValue={defaultValue}
        id={sliderId}
        label={sliderLabel}
        onChange={props.onSliderChange}
      />
      <p>sliderValue = {props.sliderVal}</p>
    </>
  );
}

// MySliderCard: function component interface to the MDBRange component
function MySliderCard( props:MySliderProps ) {
  //  <p>Value of "myslider-{props.sliderNo}" in the {lcOrd} card is {props.sliderVal}.</p>
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
  const canvasWidth = 300;
  const canvasHeight = 300;
  const canvas: HTMLCanvasElement = document.querySelector(".grojaesqueCanvas") as HTMLCanvasElement;
  const width: number = canvasWidth;
  const height: number = canvasHeight;

  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

// ctx.fillStyle = "rgb(0, 0, 0)";
// ctx.fillRect(0, 0, width, height);

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <canvas className="grojaesqueCanvas" width="{canvasWidth}" height="{canvasHeight}">
              <p>Oh no!  Your browser does not support basic graphics commands!!</p>
              <p>Oh non! Votre navigateur ne prend pas en charge les commandes graphiques de base !!</p>
              <p>¡Oh, no! ¡Su navegador no admite comandos básicos de gráficos!</p>
              <p>Ach nein! Ihr Browser unterstützt keine grundlegenden Grafikbefehle!!</p>
            </canvas>
          </div>
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-3">
          <div className="card">
            <p>"Transp": {props.transparency}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p>"BY_vs_GR": {props.blueYellowVsGreenRed}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p>"B_vs_y": {props.blueVsYellow}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p>"G_vs_R": {props.greenVsRed}</p>
          </div>
        </div>
      </div>
    </>
  );
}
// MySliderResultsCard: function component to display the slider values
function MySliderResultsCard( props:MySliderResultProps ) {
  const ordinal = ordinalsArray[props.slNo + 1];
  const lcOrd = ordinal.toLowerCase();

  return (
    <>
      <div className="card">
        <p>Value of the {lcOrd} slider = {props.slVal}</p>
      </div>
    </>
  );
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  const [values, setValues] = useState([defaultValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
    console.log("Value of slider in column " + col + " is now " + val);
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
        <GrojaesqueImageRows transparency={values[0]} blueVsYellow={values[1]} greenVsRed={values[2]} blueYellowVsGreenRed={values[3]} />
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <h3>`MySliderCard`s Using an Array of Numbers</h3>
        {sliderNumberCols}
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <h3>`MySliderResultsCard`s Using an Array of Numbers</h3>
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
