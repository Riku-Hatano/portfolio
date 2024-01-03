"use client"

import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import theme from "../Theme";
import "../Animations.css";
import { useTranslation } from 'react-i18next';

const Welcome = () => {
    const { t } = useTranslation();
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
            // className="flip-2-hor-top-1"
            className="fadeInUpAnimation"
        >
            <Typography 
                variant="h2"
                className="box"
                sx={{
                    textAlign: "center"
                }}
            >
                {t("welcome-title")}
            </Typography>
            <Typography 
                variant="h6" 
                className="box"
                sx={{
                    padding: theme.spacing(4),
                }}
            >
                {t("welcome-sentence")}
            </Typography>
        </Grid>
    )
}

export default Welcome;