import "./Designation.css";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
const Designation = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <div className="contianer">
        <div className="designation-inner">
          <div>
            <labe className="designation-labe" htmlFor="labe">Designation</labe>
            <select className="designation-select">
              <option
                className="designation-option"
                value="Match Checkout Setting"
              >
                Match Checkout Setting
              </option>
              <option className="designation-option" value="monthly salary">
                monthly salary
              </option>
              <option className="designation-option" value="annual salary">
                annual salary
              </option>
            </select>
          </div>

          <div className="gola-wrapper">
            <labe className="gola-labe" htmlFor="labe">Goal</labe>
            <input className="gola-input" placeholder="$10.00" type="number" />
            <select className="gola-select">
              <option className="gola-option" value="USD">
                USD
              </option>
              <option className="gola-option" value="RUBL">
                RUBL
              </option>
              <option className="gola-option" value="ERO">
                ERO
              </option>
            </select>
          </div>
        </div>
        <label className="label" htmlFor="labe">
          Default Amount
          <Radio color="success" />
          Match Checkout Setting
        </label>
        <label className="customize-inner" htmlFor="radio">
          <Radio className="radio" color="success" />
          <p className="customize">Customize</p>
        </label>

        <div className="checkbox-wrapper">
          <label className="checkbox-lable" htmlFor="labe">
            <Checkbox className="checkbox" defaultChecked color="success" />
            Allow donor to change default currency
          </label>
        </div>

        <div className="range-inner">
          <label htmlFor="range">
          Border size
            <input
              className="range"
              type="range"
              min="0"
              max="50"
              value={value}
              onChange={(evt) => setValue(evt.target.value)}
            />
            <strong className="range-word">{value} px</strong>
          </label>
          <label htmlFor="range">
             Border radius
            <input
              className="range"
              type="range"
              min="0"
              max="100"
              value={value2}
              onChange={(evt) => setValue2(evt.target.value)}
            />
            <strong className="range-word">{value2} px</strong>
          </label>
        </div>
      </div>
    </>
  );
};

export default Designation;