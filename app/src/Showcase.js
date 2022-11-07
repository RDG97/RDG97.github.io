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
        <div className="container bg-dark text-light ">
            <button type="button" className="btn bg-light" onClick={back}>Back</button>
            <div className="d-flex flex-row justify-content-center">
                    
                        <div className="span proj bg-warning text-danger">project go here </div>
                        <div className="span proj bg-warning text-danger">project go here </div>
                        <div className="span proj bg-warning text-danger">project go here </div>
                        
                
                
            </div>
        </div>
        </Slide>
        </>
    )
}