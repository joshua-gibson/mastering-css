import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ScrollSnapDemo from "./ScrollSnapDemo";
import CalculationDemo from "./CalculationDemo";
import MasonryDemo from "./MasonryDemo";
import AnimationsDemo from "./AnimationsDemo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ScrollSnapDemo" element={<ScrollSnapDemo />} />
      <Route path="CalculationDemo" element={<CalculationDemo />} />
      <Route path="MasonryDemo" element={<MasonryDemo />} />
      <Route path="AnimationsDemo" element={<AnimationsDemo />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
