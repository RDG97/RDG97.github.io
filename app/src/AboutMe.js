import { Slide } from "react-awesome-reveal";
import ryan from "./imgsrc/ryan.jpg";
export default function AboutMe(props) {
  function back() {
    props.setPage("home");
  }
  return (
    <Slide direction="right" className="d-md-block">
      <center>
        <div className="container bg-dark text-light d-md-block">
          <button type="button" className="btn bg-light" onClick={back}>
            Back
          </button>
          <br></br>
          <div className="d-flex flex-column text-center">
            <center>
              <img src={ryan} className="headShot" alt="Ryan Gann"></img>
            </center>
            <p>
              Hi! I am a web developer from Lexington, Kentucky, with
              experience primarily using ReactJS and Django REST framework to
              create full stack web applications. When I'm not spending way
              too much time on my computer, I like backpacking/hiking and
              working on cars. I consider myself a “forever student”, i'm
              eager to build on my coding foundations in JavaScript and
              Python, but also excited to branch out into other languages and
              frameworks. I've always enjoyed breaking t hings down to see how
              they work, and the satisfaction of fixing things (which i get
              plenty of experience doing with my own janky code) and I'm very
              experience this in a workplace. My prior experience (primarily
              in customer service and the national guard) has given me
              valuable skills like teamwork, attention to detail, and
              improving customer experience.
            </p>
          </div>
        </div>
      </center>
    </Slide>
  );
}
