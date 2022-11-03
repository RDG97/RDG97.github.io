import { Slide,Fade } from "react-awesome-reveal";
export default function Navbar() {

    return (
        <>
        <Fade delay={1e3} cascade damping={0.1}>      
            <ul className="nav flex-column bg-dark navver">
                <h2 className="text-light">Ryan Gann</h2>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <p className="text-light" >About me</p>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </Fade>
            </>
    );
}