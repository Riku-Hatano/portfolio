import { styled } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import { TimelineDot, TimelineConnector } from "@mui/lab";
import theme from "./Theme";

export const Wrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

export const SectionTitle = styled(Typography)(({variant="h1"}) => ({
    [`&.MuiTypography-${variant}`]: {
        backgroundColor: 'khaki',
      },
}))

export const ComponentWrapper = ({ children, id }: any) => {
    return (
        <Grid sx={{
            padding: {
                xs: theme.spacing(3),
                sm: theme.spacing(7),
                md: theme.spacing(10),
                lg: theme.spacing(12),
            },
        }}
        container
        id={id}
        >
            { children }
        </Grid>
    )
}

export const MyTimelineDot = styled(TimelineDot)(() => ({
    backgroundColor: theme.palette.primary.main
}))

export const MyTimelineConnector = styled(TimelineConnector)(() => ({
    backgroundColor: theme.palette.primary.main
}))