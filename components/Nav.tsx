"use client"

import React from "react"
import { Drawer, List, Typography, Grid, IconButton, Link } from "@mui/material"
import { useState } from "react";
import { styled } from "@mui/material";
import theme from "./Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Common";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const onToggle = () => {
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
    const LinkWrapper = styled(Link)(({ theme, tag }: any) => ({
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
                    <Wrapper>
                        <LinkWrapper href="#top">
                            <TypographyTitle children="top" />
                        </LinkWrapper>
                    </Wrapper>
                    <Wrapper>
                        <LinkWrapper href="#about">
                            <TypographyTitle children="about" />
                        </LinkWrapper>
                    </Wrapper>
                    <Wrapper>
                        <LinkWrapper href="#works">
                            <TypographyTitle children="works" />
                        </LinkWrapper>
                    </Wrapper>
                    <Wrapper>
                        <LinkWrapper href="#contact">
                            <TypographyTitle children="contact" />
                        </LinkWrapper>
                    </Wrapper>
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
                    margin: "10px",
                    position: "fixed"
                }}
            >
                <IconButton 
                    onClick={onToggle}
                    sx={{
                        padding: 0,
                    }}
                >
                    <Grid
                        sx={{
                            borderRadius: "50%",
                            width: {
                                xs: "40px",
                                sm: "60px",
                                md: "70px",
                                lg: "100px",
                            },
                            height: {
                                xs: "40px",
                                sm: "60px",
                                md: "70px",
                                lg: "100px",
                            },
                            fontSize: {
                                xs: "20px",
                                sm: "30px",
                                md: "35px",
                                lg: "50px",
                            },
                            backgroundColor: theme.palette.primary.main,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: ".3s",
                            "&:hover": {
                                fontSize: {
                                    xs: "10px",
                                    sm: "15px",
                                    md: "17px",
                                    lg: "25px",
                                }
                            }
                        }}
                    >
                        <FontAwesomeIcon 
                            icon={faBars} 
                            color={theme.palette.secondary.main}
                        />
                    </Grid>
                </IconButton>
            </Grid>
        </React.Fragment>
    )
}

export default Nav;




// const MyCustomComponent = ({ className, children }) => (
//     <div className={className}>
//       {children}
//     </div>
//   );
  
//   const StyledCustomComponent = styled(MyCustomComponent)(({ className, children }) => ({
//     color: "blue",
//     fontSize: "16px",
//   }))

//   const App = () => (
//     <StyledCustomComponent>
//       This is a styled custom component.
//     </StyledCustomComponent>
//   );