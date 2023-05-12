import { Slide } from "react-awesome-reveal";
import email from "./imgsrc/email (1).png";
import linked from "./imgsrc/linkedin (1).png";
export default function Navbar(props) {

  function pageAbout() {
    props.setPage("aboutme");
  }
  function pageShowcase() {
    props.setPage("showcase");
  }
  function pageLinks() {
    props.setPage("links");
  }

  return (
    <Slide cascade>
      <ul className="nav flex-column bg-dark navver d-none d-md-block">
        <h2 className="text-light">Ryan Gann</h2>
        <li className="nav-item">
          <br></br>
          <h5 className="text-light pointer" onClick={pageShowcase}>
            Showcase
          </h5>
        </li>
        <li className="nav-item">
          <br></br>
          <h5 className="text-light pointer" onClick={pageAbout}>
            About me
          </h5>
        </li>
        <li className="nav-item">
          <br></br>
          <h5 className="text-light pointer" onClick={pageLinks}>
            Links
          </h5>
        </li>

        <li class="nav-item dropdown">
          <br></br>
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
          >
            Contact Me
          </a>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ryangann1997@gmail.com"
              >
                <img src={email} className="dropdownIcon" alt="Email icon"></img>
                RyanGann1997@gmail.com
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ryangann1997@gmail.com"
              >
                <img src={linked} className="dropdownIcon" alt="LinkedIn icon"></img> LinkedIn
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </Slide>
  );
}
