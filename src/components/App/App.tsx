import React from "react";
import "../App/App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { AdminPart } from "../AdminPart/AdminPart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<AdminPart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
