import { Slide,Fade } from "react-awesome-reveal";
export default function Navbar(props) {



function test() {}

  
  function pageAbout(){
    props.setPage('aboutme')
  }
  function pageShowcase(){
    props.setPage('showcase')
  }
  function pageContact(){
    props.setPage('contactme')
  }
  function pageLinks(){
    props.setPage('links')
  }

    return (
        <>
        <Slide cascade>      
        <ul className="nav flex-column bg-dark navver">
              <h2 className="text-light">Ryan Gann</h2>
              <li className="nav-item">
              <p className="text-light" onClick={pageShowcase}>Showcase</p>
              </li>
              <li className="nav-item">
                  <p className="text-light" onClick={pageAbout}>About me</p>
              </li>
              <li className="nav-item">
              <p className="text-light" onClick={pageLinks}>Links</p>
              </li>
              <li className="nav-item">
              <p className="text-light" onClick={test}>Contact me</p>
              </li>
          </ul>
            </Slide>
            </>
    );
}