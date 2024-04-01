import "./index.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Premium from "./components/Premium";
import Packages from "./components/Packages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
