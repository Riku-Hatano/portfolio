import { styled } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import { TimelineDot, TimelineConnector } from "@mui/lab";
import theme from "./Theme";
import styled2 from "@emotion/styled";

export const Wrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

export const SectionTitle = styled(Typography)(({variant="h1"}) => ({
    // backgroundColor: "red",
    // ".&MuiTypography-root": {
    //     backgroundColor: "khaki",
    // }
    [`&.MuiTypography-${variant}`]: {
        backgroundColor: 'khaki',
      },
}))

export const MyTimelineDot = styled(TimelineDot)(() => ({
    backgroundColor: theme.palette.primary.main
}))

export const MyTimelineConnector = styled(TimelineConnector)(() => ({
    backgroundColor: theme.palette.primary.main
}))