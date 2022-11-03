import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import App from "./App";

export default function Showcase(props) {
    function back() {
        props.setPage('home')
    }
    return(
        <>
        <Slide>
        <div className="container bg-dark text-light">
        <button type="button" className="btn bg-light" onClick={back}>Back</button>
        <div className="row">
            <div className="container">
                <img src="/workspace/RDG97.github.io/img/placeholder.jpg"></img>
            </div>
        </div>
        </div>
        </Slide>
        </>
    )
}