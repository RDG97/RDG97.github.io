import { Slide } from "react-awesome-reveal";
import github from "./imgsrc/github-sign.png";
import linkedin from "./imgsrc/linkedin.png";

export default function Links(props) {
  function back() {
    props.setPage("home");
  }

  return (
    <Slide direction="right">
      <div className="container bg-dark text-light ">
        <button type="button" className="btn bg-light" onClick={back}>
          Back
        </button>
        <br></br>
        <br></br>
        <div className="container">
          <div className="d-flex flex-row justify-content-center border border-1 border-dark">
            <a href="https://www.linkedin.com/in/ryangann/">
              <img src={linkedin} className="icon mx-3" alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/RDG97">
              <img src={github} className="icon mx-3" alt="GitHub"></img>
            </a>
          </div>
        </div>
        <br></br>
        <p>More to come!</p>
      </div>
    </Slide>
  );
}
