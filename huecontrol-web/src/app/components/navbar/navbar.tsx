import { Fragment } from "react";
import styles from "./navbar.module.css"

export default function Navbar() {
    return(
        <Fragment>
            <ul>
                <li><a href="setup">Setup</a></li>
                <li><a href="dashboard">Dashboard</a></li>
            </ul>
        </Fragment>
    )
}