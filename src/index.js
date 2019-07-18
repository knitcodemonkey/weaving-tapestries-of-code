import React, { useState } from "react";
import ReactDOM from "react-dom";
import Diamond_Brocade_Stitch from "./stitches/diamond-brocade-stitch";
import "./styles.css";

function App() {
  const [desired_length_in_inches, setDesiredLength] = useState(0);
  const [stitches_per_inch, setStitchesPerInch] = useState(0);
  const [rows_per_inch, setRowsPerInch] = useState(0);
  const [total_number_of_stitches, setTotalStitches] = useState(0);
  const calculateNumberOfStitches = () => {
    const required_stitches_for_length =
      desired_length_in_inches * stitches_per_inch;
    setTotalStitches(required_stitches_for_length);
  };

  return (
    <div className="App">
      <div className="row">
        <form
          onSubmit={e => {
            e.preventDefault();
            calculateNumberOfStitches();
          }}
        >
          <div className="row">
            <label>Desired Length of Project in Inches</label>
            <input
              type="text"
              value={desired_length_in_inches}
              onChange={event => setDesiredLength(event.target.value)}
            />
          </div>
          <div className="row">
            <label>Stitches Per Inch</label>
            <input
              type="text"
              value={stitches_per_inch}
              onChange={event => setStitchesPerInch(event.target.value)}
            />
          </div>
          <div className="row">
            <label>Rows Per Inch</label>
            <input
              type="text"
              value={rows_per_inch}
              onChange={event => setRowsPerInch(event.target.value)}
            />
          </div>
          <button type="submit">Calculate Stitch Count</button>
        </form>
      </div>
      <div className="pattern">
        <h1>Your Custom Pattern</h1>
        <p>Cast on {total_number_of_stitches} stitches</p>
        {total_number_of_stitches > 0 &&
          Diamond_Brocade_Stitch(total_number_of_stitches).map((row, index) => (
            <p key={`Diamond_Brocade_Stitch_Row_${index}`}>
              Row {index + 1}: {row}
            </p>
          ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
