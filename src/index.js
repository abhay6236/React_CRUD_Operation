import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./Api";

import ApiPerform from "./ApiPerform";
import Form from "./Form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Api />}></Route>
      <Route path="/Fac/:id" element={<ApiPerform />}></Route>
      <Route path="/Form/:id" element={<Form />}></Route>
    </Routes>
  </BrowserRouter>
);
