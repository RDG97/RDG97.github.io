import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import App from "./App";
import tic from "/workspace/RDG97.github.io/app/src/imgsrc/tic.PNG"
import todo from "/workspace/RDG97.github.io/app/src/imgsrc/todo.JPG"


export default function Showcase(props) {
    function back() {
        props.setPage('home')
    }
    return(
        <>
        <Slide direction="right">
        <div className="container bg-dark text-light ">
            <button type="button" className="btn bg-light" onClick={back}>Back</button>
            <div className="d-flex flex-row justify-content-center">
            <a href="https://www.youtube.com/">
                        <div className="span proj text-light mx-3"><img src={tic} className="proj"></img><h3>Tic-Tac-Toe</h3> </div>
                        </a>
                        <div className="span proj text-light mx-3"><img src={todo} className="proj"></img><h3>Todo List</h3></div>
                        <div className="span proj text-light mx-3">project go here </div>
            </div>
            <br></br>
            <br></br>
            <div className="d-flex flex-row justify-content-center">
                        <div className="span proj bg-warning text-danger mx-3">project go here </div>
                        <div className="span proj bg-warning text-danger mx-3">project go here </div>
                        <div className="span proj bg-warning text-danger mx-3">project go here </div>
            </div>
        </div>
        </Slide>
        </>
    )
}