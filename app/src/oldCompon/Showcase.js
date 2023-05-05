import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import App from "../App";
import tic from "/workspace/RDG97.github.io/app/src/imgsrc/tic.PNG";
import todo from "/workspace/RDG97.github.io/app/src/imgsrc/todo.JPG";
import redline from "/workspace/RDG97.github.io/app/src/imgsrc/redline.JPG";
import mindread from "/workspace/RDG97.github.io/app/src/imgsrc/mindread.JPG";

export default function Showcase(props) {
  function back() {
    props.setPage("home");
  }
  return (
    <>
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
                <img src={redline} className="proj"></img>
                <h3>Project Redline</h3>
              </div>
            </a>
            <a href="https://rdg97.github.io/tic-tac-toe/">
              <div className="span proj text-light mx-3">
                <img src={tic} className="proj"></img>
                <h3>Tic-Tac-Toe</h3>{" "}
              </div>
            </a>
            <a href="https://rdg97.github.io/todo-2/">
              <div className="span proj text-light mx-3">
                <img src={todo} className="proj"></img>
                <h3>Todo List</h3>
              </div>
            </a>
          </div>
          <br></br>
          <br></br>
          <div className="d-flex flex-row justify-content-center">
            <a href="https://rdg97.github.io/mindReader/">
              <div className="span proj text-light mx-3">
                <img src={mindread} className="proj"></img>
                <h3>Mind Reader</h3>
              </div>
            </a>
          </div>
          <br></br>
          <br></br>
        </div>
      </Slide>
    </>
  );
}
