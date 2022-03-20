//import logo from "./logo.svg";
import "./App.css";

import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Me = lazy(() => import("./pages/Me/Me"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="me" element={<Me />} />
      </Routes>
    </Suspense>
  );
}
