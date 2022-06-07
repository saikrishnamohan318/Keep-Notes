import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return(
        <>
        <p className="footer">Copyright <FontAwesomeIcon icon={faCopyright} /> {year}</p>
        </>
    )
}
export default Footer;