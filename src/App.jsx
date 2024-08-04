import React from "react";
import Header from "./components/Header/Header";
import Home from "./routes/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-5 pb-5">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
