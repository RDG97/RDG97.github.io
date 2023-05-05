import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Fade, Slide } from "react-awesome-reveal";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Bilboard from "./Bilboard";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Nav />
      <Bilboard />
    </div>
  );
}
