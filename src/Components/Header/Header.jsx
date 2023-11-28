import "./Header.css";
import {Link} from "react-router-dom";

export function Header(){
    return(
        <>
            <div className="header--container">
                <ul className="pagesList" id="pagesList">
                    <li><Link to ="/" className="pages">Home</Link></li>
                    <li><Link to ="/user" className="pages">User</Link></li>
                    <li><Link to = "/contact" className="pages"> Contact</Link></li>

                </ul>
            </div>
        </>
    )
}