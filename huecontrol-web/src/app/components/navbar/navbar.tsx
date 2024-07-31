import { Fragment } from "react";
import "./navbar.css"

export default function Navbar() {
    return(
        <div className="navbar">
            <ul>
                <li><a href="setup" className={"active"}>Setup</a></li>
                <li><a href="dashboard">Dashboard</a></li>
                <li className={"settings"}><a href="settings">Settings</a></li>
            </ul>
        </div>
    )
}