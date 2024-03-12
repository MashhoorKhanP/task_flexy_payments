import { Link, useLocation } from "react-router-dom";

const PageTwo = () => {
  const location = useLocation();
  const value = location.state;
  const bgColor = value % 2 === 0 ? "green" : "blue";
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: bgColor,
        padding: "10px",
      }}
    >
      <h1 style={{ margin: 0 }}>Current Value : {value}</h1>
      <br />
      <Link
        to="/page-one"
        state={value}
        style={{
          border: "2px solid gray",
          color: "black",
          marginLeft: "10px",
          padding: "8px",
        }}
      >
        Go to Page One
      </Link>
    </div>
  );
};

export default PageTwo;
