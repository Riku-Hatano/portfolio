"use client"

import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "../Animations.css";
import theme from "../Theme";

const About = () => {
    return (
        <React.Fragment>
            <Grid container id="about" className="fadeInUpAnimation" sx={{padding: theme.spacing(2)}}>
                <Typography variant="h2">skills</Typography>
                <Grid container item direction="row" sx={{justifyContent: "space-between"}}>
                    <Grid>
                        <Typography variant="h3">front end</Typography>
                        <List>
                            <ListItem style={{padding: "0", alignItems: "flex-start"}}>JavaScript / TypeScript</ListItem>
                            <ListItem>React.js / React.ts</ListItem>
                            <ListItem>Vue.js</ListItem>
                            <ListItem>jQuery</ListItem>
                            <ListItem>UX/UI design</ListItem>
                        </List>
                    </Grid>
                    <Grid>
                        <Typography variant="h3">back end</Typography>
                        <List>
                            <ListItem>Node.js</ListItem>
                            <ListItem>PHP</ListItem>
                            <ListItem>MySQL</ListItem>
                        </List>
                    </Grid>
                    <Grid>
                        <Typography variant="h3">dev ops</Typography>
                        <List>
                            <ListItem>Git / GitHub</ListItem>
                            <ListItem>Figma</ListItem>
                        </List>
                    </Grid>
                </Grid>
                <section className="aboutSectionSecond box">
                    <article>
                        <h1>about me</h1>
                        <h3>self introduction</h3>
                        <p>
                            Hi! I'm Riku Hatano, from Japan! I have learned web development in Tamwood Careers for six months and before joinning Tamwood, I have studied this field for five months.
                        </p>
                    </article>
                    <section>
                        <h3>short history</h3>
                        <p>Let's look back on my life a little bit!</p>
                        <section className="eventContainer">
                            <article className="eventCell">
                                <p>
                                    <span>1999.08</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    <img src="assets/test.jpeg" alt="born" />
                                    <img src="public/next.svg" alt="" />
                                    <figcaption>
                                        <p>
                                            Born in Niigata prefecture, located on north of Tokyo. I was too mischievous and oftern do stupid things to stranger though, I don't remember anything.
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2003~'15</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    {/* <img src={Es} alt="elementalyjuniorhigh" /> */}
                                    <figcaption>
                                        <p>
                                            Moved to Chiba prefecture close to Tokyo. And I have played soccer for full of 13 years.
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2015~'18</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    {/* <img src={Hs} alt="highschool" /> */}
                                    <figcaption>
                                        <p>
                                            Instead of soccer, I started to play badminton as club activity. But one year later, because of asthma, I quit to play.
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2018~'21</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    {/* <img src={Us} alt="university" /> */}
                                    <figcaption>
                                        <p>
                                            In university, I have learned Economics. Actually I enjoyed leaning though, I was interested in programming.
                                        </p>
                                        <p>
                                            When COVID happened and forced to be inside of house, I touched JavaScript for the first time. 
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2022~now</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    {/* <img src={Sa} alt="studyabroad" /> */}
                                    <figcaption>
                                        <p>
                                            I have been to Dubai to study English and Vancouver to learn WebDevelopment. 
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                        </section>
                    </section>
                </section>
            </Grid>
        </React.Fragment>
    )
}

export default About;