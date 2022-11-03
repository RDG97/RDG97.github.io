import { useEffect, useState } from 'react';
import { render } from "react-dom";
import { Fade, Slide } from "react-awesome-reveal";
import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe';


export default function App() {
  const [page, setPage] = useState('home');

function Navbar() {
  

  

  return (       
          <ul className="nav flex-column bg-dark navver">
              <h2 className="text-light">Ryan Gann</h2>
              <li className="nav-item">
              <p className="text-light" onClick={test}>Showcase</p>
              </li>
              <li className="nav-item">
                  <p className="text-light" onClick={test}>About me</p>
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






  
  function test(){
  
    console.log('test')
    setPage('aboutme')
  }
  return (
    <div className="App">
      {page == 'aboutme' && <AboutMe setPage={setPage}/>}
      {page == 'home' && <Navbar />}
    </div>
    
  );
}


