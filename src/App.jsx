import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";

export const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second/:id" element={<SecondPage />} />
      </Routes>
    </React.Fragment>
  );
};
export default App;