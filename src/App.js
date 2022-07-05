import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import KYC from "./components/KYC";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/kyc" element={<KYC />} />
      </Routes>
    </>
  );
}

export default App;
