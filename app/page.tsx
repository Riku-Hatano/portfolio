"use client"

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </React.Fragment>
  )
}
