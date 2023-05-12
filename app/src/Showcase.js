import { Slide } from "react-awesome-reveal";
import tic from "./imgsrc/tic.PNG";
import todo from "./imgsrc/todo.JPG";
import redline from "./imgsrc/redline.JPG";
import mindread from "./imgsrc/mindread.JPG";

export default function Showcase(props) {
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
        <div className="d-flex flex-row justify-content-center">
          <a href="https://project-redline123.web.app/">
            <div className="span proj text-light mx-3">
              <img src={redline} className="proj" alt="Screenshot of the application Project Redline"></img>
              <h3>Project Redline</h3>
            </div>
          </a>
          <a href="https://rdg97.github.io/tic-tac-toe/">
            <div className="span proj text-light mx-3">
              <img src={tic} className="proj" alt="Screenshot of the application Tic-Tac-Toe"></img>
              <h3>Tic-Tac-Toe</h3>
            </div>
          </a>
          <a href="https://rdg97.github.io/todo-2/">
            <div className="span proj text-light mx-3">
              <img src={todo} className="proj" alt="Screenshot of the application Todo List"></img>
              <h3>Todo List</h3>
            </div>
          </a>
        </div>
        <br></br>
        <br></br>
        <div className="d-flex flex-row justify-content-center">
          <a href="https://rdg97.github.io/mindReader/">
            <div className="span proj text-light mx-3">
              <img src={mindread} className="proj" alt="Screenshot of the application Mind Reader"></img>
              <h3>Mind Reader</h3>
            </div>
          </a>
        </div>
        <br></br>
        <br></br>
      </div>
    </Slide>
  );
}
