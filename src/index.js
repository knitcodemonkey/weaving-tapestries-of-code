import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import Diamond_Brocade_Stitch from "./stitches/diamond-brocade-stitch";
import "./styles.css";

const stitch_patterns = [{
  "name": "Diamond Brocade Stitch",
  "row_repeat": 8,
  "row_extra": 1,
  "pattern_repeat": 8
}]

function App() {
  const [desired_length_in_inches, setDesiredLength] = useState(0);
  const [stitches_per_inch, setStitchesPerInch] = useState(0);
  const [total_number_of_stitches, setTotalStitches] = useState(0);
  const [stitch_pattern, setStitchPattern] = useState({ name: "Custom", row_repeat: 0 })

  const calculateNumberOfStitches = () => {
    const required_stitches_for_length =
      desired_length_in_inches * stitches_per_inch;
    if (required_stitches_for_length < stitch_pattern.row_repeat + stitch_pattern.row_extra) {
      return `The pattern requires a minimum of ${stitch_pattern.row_repeat + stitch_pattern.row_extra} stitches, but there are only ${required_stitches_for_length} in this row`
    }



    // By rounding, we choose the closer of the two measurements to the one you wanted. 
    const stitches_per_row = Math.round(required_stitches_for_length / stitch_pattern.row_repeat) * stitch_pattern.row_repeat
      + stitch_pattern.row_extra

    // set to state
    setTotalStitches(stitches_per_row);
  };

  return (
    <div className="App">

      <form
        onSubmit={e => {
          e.preventDefault();
          calculateNumberOfStitches();
        }}
      >
        <div className="row">
          <label>Width of Project in Inches:</label>
          <input
            type="text"
            value={desired_length_in_inches}
            onChange={event => setDesiredLength(event.target.value)}
          />
        </div>
        <div className="row">
          <label>Stitches Per Inch:</label>
          <input
            type="text"
            value={stitches_per_inch}
            onChange={event => setStitchesPerInch(event.target.value)}
          />
        </div>
        <div className="row">
          <label>Choose Stitch Pattern:</label>
          <select onChange={(e) => setStitchPattern(stitch_patterns[e.target.value])}>

            <option>Please Select One</option>
            {
              stitch_patterns.map((stitch_pattern, index) => (
                <option value={index} key={stitch_pattern.key}>{stitch_pattern.name}</option>
              ))
            }
          </select>
        </div>
        <button type="submit">Generate Pattern</button>
      </form>
      <div className="pattern">
        {total_number_of_stitches > stitch_pattern.row_repeat}
        <h1>Your {stitch_pattern ? stitch_pattern.name : "Custom"} Pattern</h1>
        {total_number_of_stitches > 0 &&
          (<div className="rows">
            <p>Cast on {total_number_of_stitches} stitches</p>

            {Diamond_Brocade_Stitch(total_number_of_stitches).map((row, index) => {
              return (
                <p key={`Diamond_Brocade_Stitch_Row_${index}`}>
                  <label>Row {index + 1}:</label> {row}
                </p>
              )
            })}
            <p>Repeat pattern rows for desired length.</p>
          </div>)
        }
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
