import React, { useState } from "react";
import "./style.scss";
import ReactSlider from "react-slider";

const RangeSlider = () => {
  const [values, setValues] = useState([0]);
  console.log(values);

  return (
    <>
      <div className="rangeSlider__wraper">
        <ReactSlider
          className="rangeSlider"
          thumbClassName="rangeSlider__thumb"
          trackClassName="rangeSlider__track"
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}></div>}
          pearling
          minDistance={10}
        />
      </div>
    </>
  );
};

export default RangeSlider;
