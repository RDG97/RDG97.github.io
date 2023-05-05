import globe from '/workspace/RDG97.github.io/app/src/imgsrc/globe.png'
import stonks from '/workspace/RDG97.github.io/app/src/imgsrc/stonks.png'
import join from '/workspace/RDG97.github.io/app/src/imgsrc/join.png'
import cog from '/workspace/RDG97.github.io/app/src/imgsrc/cog.png'

export default function Bilboard(props) {
  return (
    <>
      <div class="d-flex justify-content-start bg-secondary px-5 ">
        <div class="d-flex  bg-primary px-5 py-5">
        <div class="d-flex flex-column bg-danger ">
          <div class="p-2 bd-highlight text-warning">
            <p align="left" class="h1">
              COMFORT<br></br>WITHOUT<br></br>COMPROMISE
            </p>
          </div>

          <div class="d-flex bg-danger ">
            <div class="p-2 bd-highlight text-light">
              <p align="left" class="h5">
                AIRFLOW SOLUTIONS FROM THE #1 BEST-SELLING<br></br> BIG FAN
                MANUFACTURER IN THE WORLD.
              </p>
            </div>
          </div>
          <div class="d-flex bg-danger ">
            <div class="p-2 bd-highlight text-light">
            <button type="button" class="btn btn-warning"><p class="h6">GET A QUOTE</p></button>
            </div>
            </div>
        </div>
        </div>
      </div>
      <div class="d-flex bg-primary px-5 py-5 mx-auto ">
        <div class="d-flex bg-danger px-auto py-auto flex-column">
            <div class="p-2 bd-highlight justify-content-start">
            <p align="left" class="h4">WE ARE BIG ASS FANS.</p>
            </div>
            <div class="p-2 bd-highlight">
            <p align="left">We deliver comfort to spaces where comfort seems<br></br>
                impossible. Doing it undeniably better than any other<br></br>
                company in the world. We serve our clients with passion<br></br>
                backed by innovation. We think smarter. We go bigger.<br></br>
                We make every space better for people to work safely,<br></br>
                 perform productively, and live comfortably.
                </p>
            </div>
            <div class="d-flex">
            <button type="button" class="btn btn-outline-dark"><p class="h5">CONTACT US</p></button>
            </div>
        </div>
        <div class="d-flex bg-warning px-5 py-auto flex-column">
                <div class="d-flex bg-secondary mx-5 my-3 px-1 py-1 justify-content-start">
                    <img class="img-fluid" src={globe}></img>
                    <p align="left" class="h4 text-wrap">WORLD'S LARGEST <br></br>MANUFACTURER OF HVLS <br></br>FANS</p>
        </div>
        <div class="d-flex bg-secondary mx-5 my-3 px-1 py-1 justify-content-start">
                    <img class="img-fluid" src={cog}></img>
                    <p align="left" class="h4">THE WORLD'S ONLY 45,000 <br></br>SQ FT LEED GOLD R&D <br></br>FACILITY</p>
        </div>
      </div>
      <div class="d-flex bg-warning px-5 py-auto flex-column">
                <div class="d-flex bg-secondary mx-5 my-3 px-1 py-1 justify-content-start">
                    <img class="img-fluid" src={stonks}></img>
                    <p align="left" class="h4">15%+ INCREASE IN SUMMER <br></br>PRODUCTIVITY AND 70%+ <br></br>LESS ENERGY USAGE</p>
        </div>
        <div class="d-flex bg-secondary mx-5 my-3 px-1 py-1 justify-content-start">
                    <img class="img-fluid" src={join}></img>
                    <p align="left" class="h4">MORE THAN 80% OF <br></br>FORTUNE 500 COMPANIES <br></br>USE BIG ASS FANS<br></br> PRODUCTS</p>
        </div>
      </div>
      </div>
    </>
  );
}
