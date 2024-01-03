import { Grid, Typography, Link } from "@mui/material";
import theme from "../Theme";
import { useTranslation } from "react-i18next";

interface WorkComponent {
    title: string,
    appLink: string,
    imgSrc: string,
    sentences: string[],
}
const WorkComponent = ({ title, appLink, imgSrc, sentences }: WorkComponent) => {
    const { t } = useTranslation();
    return (
        <Grid container item rowSpacing={4}>
            <Grid item>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid container item>
                <Grid item xs={12} sm={6} md={4}>
                    <Link href={appLink} target="_blank">
                        <img src={imgSrc} alt="" width="200px" height="200px"/>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    {
                        sentences.map((item) => {
                            return (
                                <Typography variant="body1">
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
        <>
            <Grid container className="works" id="works" sx={{padding: theme.spacing(10)}}>
                <Typography variant="h2" mb={6}>Works</Typography>
                <Grid container item rowSpacing={6} sx={{justifyContent: "space-between"}}>
                    <WorkComponent 
                        title={t("works1-title")}
                        appLink="https://othello-wheat.vercel.app/"
                        imgSrc="/assets/test.jpeg"
                        sentences={[
                            t("works1-sentence1"),
                            t("works1-sentence2"),
                            t("works1-sentence3"),
                            t("works1-sentence4"),
                        ]}
                    />
                    <WorkComponent 
                        title={t("works2-title")}
                        appLink="https://othello-wheat.vercel.app/"
                        imgSrc="/assets/test.jpeg"
                        sentences={[
                            t("works2-sentence1"),
                            t("works2-sentence2"),
                            t("works2-sentence3"),
                        ]}
                    />
                    <WorkComponent 
                        title={t("works3-title")}
                        appLink="https://othello-wheat.vercel.app/"
                        imgSrc="/assets/test.jpeg"
                        sentences={[
                            t("works3-sentence1"),
                            t("works3-sentence2"),
                        ]}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Works;