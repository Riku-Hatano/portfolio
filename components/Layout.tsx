import About from "./en/About";
import Contact from "./en/Contact";
import Works from "./en/Works";
import Welcome from "./en/Welcome";
import Nav from "./Nav";
import React from "react";
import theme from "./Theme";

const Layout = () => {
    return (
        <div style={{backgroundColor: theme.palette.secondary.main}}>
            <Nav />
            <Welcome />
            <About />
            <Works />
            <Contact />
        </div>
    )
}

export default Layout;