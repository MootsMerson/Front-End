import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

// importar as paginas
import TelaLogin from "./Pages/telaLogin/TelaLogin";
import Salvos from "./Pages/Salvos/salvos"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="telaLogin" element={<TelaLogin />} />
          <Route path="salvos" element={<Salvos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
