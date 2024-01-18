import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Container/Home";
import About from "./Container/About";
import Pricing from "./Container/Pricing";
import Products from "./Container/Products";
import Jobs from "./Container/Jobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
