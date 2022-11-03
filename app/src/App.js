import { useEffect, useState } from 'react';
import { render } from "react-dom";
import { Fade, Slide } from "react-awesome-reveal";
import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe';
import Showcase from './Showcase';


export default function App() {
  const [page, setPage] = useState('home');

function Navbar() {
  

  

  return (       
          <ul className="nav flex-column bg-dark navver">
              <h2 className="text-light">Ryan Gann</h2>
              <li className="nav-item">
              <p className="text-light" onClick={pageShowcase}>Showcase</p>
              </li>
              <li className="nav-item">
                  <p className="text-light" onClick={pageAbout}>About me</p>
              </li>
              <li className="nav-item">
              <p className="text-light" onClick={test}>Links</p>
              </li>
              <li className="nav-item">
              <p className="text-light" onClick={test}>Contact me</p>
              </li>
          </ul>
  );
}




function test() {}

  
  function pageAbout(){
    setPage('aboutme')
  }
  function pageShowcase(){
    setPage('showcase')
  }
  function pageContact(){
    setPage('contactme')
  }
  function pageLinks(){
    setPage('links')
  }
  return (
    <div className="App">
      {page == 'showcase' && <Showcase setPage={setPage}/>}
      {page == 'aboutme' && <AboutMe setPage={setPage}/>}
      {page == 'home' && <Navbar />}
    </div>
    
  );
}


