import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Fade, Slide } from "react-awesome-reveal";
import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./AboutMe";
import Showcase from "./Showcase";
import Links from "./Links";
import Navbar from "./Navbar";
import Mnav from "./Mnav";
import MAboutMe from "./MAboutME";
import MShowcase from "./MShowcase";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      <Mnav page={page} setPage={setPage} />
      {page === "links" && <Links page={page} setPage={setPage} />}
      {page === "showcase" && <Showcase page={page} setPage={setPage} />}
      {page === "aboutme" && <AboutMe page={page} setPage={setPage} />}
      {page === "mshowcase" && <MShowcase page={page} setPage={setPage} />}
      {page === "maboutme" && <MAboutMe page={page} setPage={setPage} />}
    </div>
  );
}
