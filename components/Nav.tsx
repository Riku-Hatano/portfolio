"use client"

import React from "react"
import { Drawer, List, ListItem, Typography, Grid, IconButton, Link } from "@mui/material"
import { useState } from "react";
import { styled } from "@mui/material";
import theme from "./Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const onToggle = () => {
        console.log(toggle);
        setToggle(!toggle);
    }
    const TypographyTitle = styled(Typography)(({ theme }: any) => ({
        color: theme.palette.secondary.main,
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        transition: ".4s",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
        }
    }));
    const ListWrapper = styled(ListItem)(({ theme }: any) => ({
        padding: "0",
        width: "100%",
    }));
    const LinkWrapper = styled(Link)(({ theme }: any) => ({
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        width: "100%",
    }));

    return (
        <React.Fragment>
            <Drawer
                open={toggle}
                onClick={onToggle}
                sx={{
                    ".MuiDrawer-paper": {
                        backgroundColor: theme.palette.primary.main,
                        width: "40%"
                    }
                }}
            >
                <List>
                    <ListWrapper>
                        <LinkWrapper href="#top">
                            <TypographyTitle>
                                top
                            </TypographyTitle>
                        </LinkWrapper>
                    </ListWrapper>
                    <ListWrapper>
                        <LinkWrapper href="#about">
                            <TypographyTitle>
                                about
                            </TypographyTitle>
                        </LinkWrapper>
                    </ListWrapper>
                    <ListWrapper>
                        <LinkWrapper href="#works">
                            <TypographyTitle>
                                works
                            </TypographyTitle>
                        </LinkWrapper>
                    </ListWrapper>
                    <ListWrapper>
                        <LinkWrapper href="#contact">
                            <TypographyTitle>
                                contact
                            </TypographyTitle>
                        </LinkWrapper>
                    </ListWrapper>
                </List>
            </Drawer>
            <Grid 
                sx={{
                    display: "flex",
                    alignItems: "center",
                    height: theme.spacing(7),
                    // backgroundColor: theme.palette.primary.main,
                    width: "100%",
                }}
                style={{
                    position: "fixed"
                }}
            >
                <IconButton onClick={onToggle}>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        color={theme.palette.primary.main}
                        fontSize={50}
                    />
                </IconButton>
                {/* <Typography 
                    variant="h4"
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        color: theme.palette.primary.main,
                    }}
                >
                    Riku's portfolio
                </Typography> */}
            </Grid>
        </React.Fragment>
    )
}

export default Nav;