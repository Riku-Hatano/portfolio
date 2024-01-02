"use client"

import { Grid, List, ListItem, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineOppositeContent } from "@mui/lab"
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
  
import React from "react";
import "../Animations.css";
import theme from "../Theme";
import { SectionTitle, MyTimelineConnector, MyTimelineDot } from "../Common";

const About = () => {
    return (
        <React.Fragment>
            <Grid container id="about" className="fadeInUpAnimation" sx={{padding: theme.spacing(10)}}>
                <Typography variant="h2">skills</Typography>
                <Grid container item direction="row" sx={{justifyContent: "space-between"}} mb={10}>
                    <Grid>
                        <Typography variant="h4">front end</Typography>
                        <List>
                            <ListItem>JavaScript / TypeScript</ListItem>
                            <ListItem>React.js / React.ts</ListItem>
                            <ListItem>Vue.js</ListItem>
                            <ListItem>jQuery</ListItem>
                            <ListItem>UX/UI design</ListItem>
                        </List>
                    </Grid>
                    <Grid>
                        <Typography variant="h4">back end</Typography>
                        <List>
                            <ListItem>Node.js</ListItem>
                            <ListItem>PHP</ListItem>
                            <ListItem>MySQL</ListItem>
                        </List>
                    </Grid>
                    <Grid>
                        <Typography variant="h4">dev ops</Typography>
                        <List>
                            <ListItem>Git / GitHub</ListItem>
                            <ListItem>Figma</ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={4}>
                    <Grid item container rowSpacing={2}>
                        <Grid item>
                            <Typography variant="h2">about me</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4">self introduction</Typography>
                            <Typography variant="body1">
                                Hi! I'm Riku Hatano, from Japan! I have learned web development in Tamwood Careers for six months and before joinning Tamwood, I have studied this field for five months.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">short history</Typography>
                        <Typography variant="body1">Let's look back on my life a little bit!</Typography>
                        <Timeline 
                            position="right"
                            sx={{
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                  flex: 0.2,
                                },
                            }}
                        >
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    1999.08
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <MyTimelineDot />
                                    <MyTimelineConnector  />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Born in Niigata prefecture, located on north of Tokyo. I was too mischievous and oftern do stupid things to stranger though, I don't remember anything.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    2003~'15
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <MyTimelineDot />
                                    <MyTimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Moved to Chiba prefecture close to Tokyo. And I have played soccer for full of 13 years.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    2015~'18
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <MyTimelineDot />
                                    <MyTimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Instead of soccer, I started to play badminton as club activity. But one year later, because of asthma, I quit to play.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    2018~'21
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <MyTimelineDot />
                                    <MyTimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                        In university, I have learned Economics. Actually I enjoyed leaning though, I was interested in programming.
                                    </Typography>
                                    <Typography>
                                        When COVID happened and forced to be inside of house, I touched JavaScript for the first time. 
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    2022~now
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <MyTimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                    I have been to Dubai to study English and Vancouver to learn WebDevelopment. Then, I've joined internship for three months in Japan.
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default About;