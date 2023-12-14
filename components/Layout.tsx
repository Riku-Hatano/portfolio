import About from "./en/About";
import Contact from "./en/Contact";
import Works from "./en/Works";
import Welcome from "./en/Welcome";
import Nav from "./Nav";
import React from "react";

const Layout = () => {
    return (
        <React.Fragment>
            <Nav />
            <Welcome />
            <About />
            <Works />
            <Contact />
        </React.Fragment>
    )
}

export default Layout;