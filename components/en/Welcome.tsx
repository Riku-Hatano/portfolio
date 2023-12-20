"use client"

import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import theme from "../Theme";
import "../Animations.css";

const Welcome = () => {
    return (
        <Grid 
            id="top"
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            className="flip-2-hor-top-1"
            // className="fadeInUpAnimation"
        >
            <Typography 
                variant="h2" 
                className="box"
                sx={{
                    textAlign: "center"
                }}
            >
                welcome to my portfolio site!
            </Typography>
            <Typography 
                variant="h6" 
                className="box"
                sx={{
                    padding: theme.spacing(4),
                    // backgroundColor: {
                    //     xs: "red",
                    //     md: "blue",
                    // }
                }}
            >
                Here are some works and brief self-introduction. I'm happy that you take a glance at this page!
            </Typography>
        </Grid>
    )
}

export default Welcome;