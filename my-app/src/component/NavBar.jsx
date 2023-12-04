import { Link } from "react-router-dom";

//Membuat componetn Navbar dengan teknik export name
export function Navbar() {
    return(
        <div className="topnav">
            <Link to="/" className="App-Link">
                Latihan
            </Link>
        </div>
    );
}