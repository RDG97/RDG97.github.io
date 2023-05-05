import logo from "/workspace/RDG97.github.io/app/src/imgsrc/BAF-Logo-Reversed.png"
import hamburg from "/workspace/RDG97.github.io/app/src/imgsrc/icon-hamburger-menu.png"
export default function Nav(props) {

    return(
<>
    <div class="d-flex bg-dark justify-content-end text-light">
        <div class="d-flex justify-content-center">
        <div class="d-flex px-3 justify-content-center">
        <p>888-888-8888</p>
        </div>
        <div class="d-flex px-3">
        <p>Find a Distributor</p>
        </div>
        <div class="d-flex px-3">
        <p>Store Finder</p>
        </div>
        </div>
    </div>
        
<nav class="navbar navbar-expand-sm navbar-dark bg-dark border-top border-bottom border-white flex-fill">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    

    <div class="px-3 d-flex ">
        <img class="ham" src={hamburg}></img>
    </div>
    <div class="d-flex justify-content-start nlogo ">
        <img id="logo" class="img nlogo"src={logo}></img>
    </div>
        <div class="d-flex text-light px-3">
            <div class="d-flex px-3">
                <h6>FOR BUSINESS</h6>
            </div>
            <div class="d-flex px-3">
                <h6>FOR PROFESSIONALS</h6>
            </div>
            <div class="d-flex px-3">
                <h6>FOR HOME</h6>
            </div>
            <div class="d-flex px-3">
                <h6>PRODUCTS</h6>
            </div>
            <div class="d-flex px-3">
                <h6>SUPPORT</h6>
            </div>
        </div>
        <div class="d-flex flex-fill flex-row-reverse">
      <div class="d-flex bg-warning px-6">
        <div class="d-flex flex-fill"><h6>SHOP ONLINE</h6></div>
      </div>
      </div>
    </div>

</nav>
</>
)}