import { useState } from "react";
import Navbar from "./assets/components/navbar/Navbar";
import Header from "./assets/components/header/Header";

import CartManager from "./assets/components/CartManager";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <CartManager />
    </>
  );
}

export default App;
