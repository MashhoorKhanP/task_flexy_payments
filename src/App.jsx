import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </>
  );
}

export default App;
