import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PageOne = () => {
  const location = useLocation();
  const currentValue = location.state;
  const [value, setValue] = useState(currentValue ? currentValue : 0);
  return (
    <div style={{ padding: "10px" }}>
      <button
        onClick={() => setValue((prev) => prev + 1)}
        style={{
          border: "2px solid #0000",
          background: "black",
          color: "white",
          padding: "10px",
        }}
      >
        Increment Button
      </button>
      <button
        onClick={() => setValue(0)}
        style={{
          border: "2px solid #0000",
          marginLeft: "10px",
          background: "black",
          color: "white",
          padding: "10px",
        }}
      >
        Reset Value
      </button>
      <h1>Current Value : {value}</h1>

      <Link
        to="/page-two"
        state={value}
        style={{ border: "2px solid gray", color: "black", padding: "8px" }}
      >
        Go to Page Two
      </Link>
    </div>
  );
};

export default PageOne;
