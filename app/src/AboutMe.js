
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import App from "./App";
import ryan from "/workspace/RDG97.github.io/app/src/imgsrc/ryan.jpg"
export default function AboutMe(props) {
    function back() {
        props.setPage('home')
    }
    return(
        <>
        <Slide direction="right">
        <div className="container bg-dark text-light">
        <button type="button" className="btn bg-light" onClick={back}>Back</button>
        <br></br>
        <div className="d-flex flex-column text-center">
            <center>
        <img src={ryan} className="headShot"></img>
        </center>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>

            </div>

        </div>

        </Slide>
        </>
    )
}