import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ScrollSnapDemo from "./ScrollSnapDemo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ScrollSnapDemo" element={<ScrollSnapDemo />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
