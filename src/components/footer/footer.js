import React, { Component } from 'react';
import './footer.css';

function Footer() {
    const anio = new Date().getUTCFullYear();
    return ( <
        div className = "Footer" >
        <
        footer class = "footer bg-dark" >
        <
        div class = "Container" >
        <
        p >
        &
        copy; Unipamplona { anio + 1 } <
        /p>   <
        /div>   <
        /footer>  <
        /div>
    )
}



export default Footer;