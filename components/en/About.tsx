"use client"

import { Grid, List, ListItem, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineOppositeContent } from "@mui/lab"
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import React from "react";
import "../Animations.css";
import { MyTimelineConnector, MyTimelineDot } from "../Common";
import { useTranslation } from 'react-i18next';
import { ComponentWrapper } from "../Common";

interface TimelineComponent {
    time: string,
    content: string,
    isLastContent?: boolean
}
const TimelineComponent = ({ time, content, isLastContent=false}: TimelineComponent) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{
                "&.MuiTypography-root": {
                    // padding: 0,
                }
            }}>
                {time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <MyTimelineDot />
                {
                    !isLastContent && <MyTimelineConnector />
                }
            </TimelineSeparator>
            <TimelineContent>
                {content}
            </TimelineContent>
        </TimelineItem>
    )
}
const About = () => {
    const { t } = useTranslation();
    return (
        <ComponentWrapper id="about">
            <Typography variant="h2" mb={2}>Skills</Typography>
            <Grid container item direction="row" sx={{justifyContent: "space-between"}} mb={10}>
                <Grid>
                    <Typography variant="h4">Front End</Typography>
                    <List>
                        <ListItem>TypeScript</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Next</ListItem>
                        <ListItem>Redux</ListItem>
                        <ListItem>Material UI</ListItem>
                    </List>
                </Grid>
                <Grid>
                    <Typography variant="h4">Back End</Typography>
                    <List>
                        <ListItem>Node.js</ListItem>
                        <ListItem>PHP</ListItem>
                        <ListItem>MySQL</ListItem>
                    </List>
                </Grid>
                <Grid>
                    <Typography variant="h4">Dev Ops</Typography>
                    <List>
                        <ListItem>GitHub</ListItem>
                        <ListItem>Figma</ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid container rowSpacing={4}>
                <Grid item container rowSpacing={2}>
                    <Grid item>
                        <Typography variant="h2">About Me</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" mb={2}>{t("about-selfIntroduction")}</Typography>
                        <Typography variant="body1">{t("about-selfIntroductionContent")}</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="h4" mb={2}>{t("about-shortHistory")}</Typography>
                    <Typography variant="body1">{t("about-shortHistorySentence")}</Typography>
                    <Timeline 
                        position="right"
                        sx={{
                            "&.MuiTimeline-root": {
                                padding: 0,
                            },
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: {
                                    xs: 0.3,
                                    sm: 0.2,
                                    md: 0.1,
                                    lg: 0.07,
                                }
                            },
                        }}
                    >
                        <TimelineComponent time="1999.08" content={t("about-historyContent1")} />
                        <TimelineComponent time="2003~'15" content={t("about-historyContent2")} />
                        <TimelineComponent time="2015~'18" content={t("about-historyContent3")} />
                        <TimelineComponent time="2018~'21" content={t("about-historyContent4")} />
                        <TimelineComponent time="2022~now" content={t("about-historyContent5")} />
                    </Timeline>
                </Grid>
            </Grid>
        </ComponentWrapper>
    )
}

export default About;