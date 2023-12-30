import { styled } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
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