import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Me from "./pages/Me/Me";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="me" element={<Me />} />
    </Routes>
  );
}
