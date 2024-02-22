import { Grid, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ComponentWrapper } from "../Common";
import { styled } from "@mui/material";

interface WorkComponent {
    title: string,
    appLink: string,
    imgSrc: string,
    sentences: string[],
}
const WorkComponent = ({ title, appLink, imgSrc, sentences }: WorkComponent) => {
    return (
        <Grid container item rowSpacing={4}>
            <Grid item>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid container item rowSpacing={2}>
                <Grid item xs={12} md={4} lg={2}>
                    <Link href={appLink} target="_blank">
                        <img src={imgSrc} alt="" width="200px" height="200px" />
                    </Link>
                </Grid>
                <Grid item xs={12} md={8} lg={10}>
                    {
                        sentences.map((item, idx) => {
                            return (
                                <Typography variant="body1" key={`${item}:${idx}`}>
                                    {item}
                                </Typography>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
const Works = () => {
    const { t } = useTranslation();
    return (
        <ComponentWrapper id="works">
            <Typography variant="h2" mb={6}>Works</Typography>
            <Grid container item rowSpacing={6} sx={{justifyContent: "space-between"}}>
                <WorkComponent 
                    title={t("works1-title")}
                    appLink="https://othello2.vercel.app/"
                    imgSrc="/assets/othello.png"
                    sentences={[
                        t("works1-sentence1"),
                        t("works1-sentence2"),
                        t("works1-sentence3"),
                        t("works1-sentence4"),
                    ]}
                />
                <WorkComponent 
                    title={t("works2-title")}
                    appLink="https://chessgame-one.vercel.app/game"
                    imgSrc="/assets/chess.png"
                    sentences={[
                        t("works2-sentence1"),
                        t("works2-sentence2"),
                        t("works2-sentence3"),
                    ]}
                />
                <WorkComponent 
                    title={t("works3-title")}
                    appLink="https://tetris-olive.vercel.app/game"
                    imgSrc="/assets/tetris.png"
                    sentences={[
                        t("works3-sentence1"),
                        t("works3-sentence2"),
                    ]}
                />
            </Grid>
        </ComponentWrapper>
    )
}

export default Works;