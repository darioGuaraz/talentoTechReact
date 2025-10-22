import { useState } from "react";
import Navbar from "./assets/components/navbar/Navbar";
import Header from "./assets/components/header/Header";
import Main from "./assets/components/main/Main";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Main />
    </>
  );
}

export default App;
