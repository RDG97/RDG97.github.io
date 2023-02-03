export default function mNav(props) {

  function pageAbout(){
    setTimeout(
      props.setPage('maboutme'), 750)
  }
  function pageShowcase(){
    setTimeout(
      props.setPage('showcase'), 750)
  }
  function pageContact(){
    props.setPage('contactme')
  }
  function pageLinks(){
    props.setPage('links')
  }




    return (
        <nav class="navbar navbar-dark bg-dark fixed-top d-md-none">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Ryan Gann</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Ryan Gann</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-link" data-bs-dismiss="offcanvas" aria-label="Close" onClick={pageAbout}>About Me</button>
                <button type="button" class="btn btn-link" data-bs-dismiss="offcanvas" aria-label="Close" onClick={pageShowcase}>Showcase</button>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Links
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
    
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    )
}