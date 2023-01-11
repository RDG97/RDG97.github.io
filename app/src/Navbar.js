import { Slide,Fade } from "react-awesome-reveal";
export default function Navbar() {

    return (
        <>
        <Slide cascade>      
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
            </Slide>
            </>
    );
}