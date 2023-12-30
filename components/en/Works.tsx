import { Grid, Typography, Link } from "@mui/material";
import theme from "../Theme";

const Works = () => {
    return (
        <>
            <Grid container className="works" id="works" sx={{padding: theme.spacing(10)}}>
                <Typography variant="h2" mb={6}>works</Typography>
                <Grid container item rowSpacing={6} sx={{justifyContent: "space-between"}}>
                    <Grid container item rowSpacing={4}>
                        <Grid item>
                            <Typography variant="h5">Othello Application</Typography>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12} sm={6} md={4}>
                                <Link href="https://othello-wheat.vercel.app/" target="_blank">
                                    <img src="/assets/test.jpeg" alt="" width="200px" height="200px"/>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8}>
                                <Typography variant="body1">
                                    Have you ever seen othello puzzle in SNS or something? 
                                </Typography>
                                <Typography variant="body1">
                                    If so, and want to think seriously, this apps is very useful. 
                                </Typography>
                                <Typography variant="body1">
                                    This apps has an edit board mode. In this mode, we can place pieces as you want and start the game with specific situation.
                                </Typography>
                                <Typography variant="body1">
                                    As far as I know, there are no free othello apps in AppStore for now. So, I hope this will help othello player who want to fix othello puzzle for free. 
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item rowSpacing={4}>
                        <Grid item>
                            <Typography variant="h5">Chess Application</Typography>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12} sm={6} md={4}>
                                <Link href="https://othello-wheat.vercel.app/" target="_blank">
                                    <img src="/assets/test.jpeg" alt="" width="200px" height="200px"/>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8}>
                            <Typography variant="body1">
                                This apps hasn't have edit mode yet, but this mode will be comming soon. 
                            </Typography>
                            <Typography variant="body1">
                                As far as I know, same as othello apps, I have never seen chess apps that can edit the board or make specific situation. This is also good for solving puzzle.
                            </Typography>
                            <Typography variant="body1">
                                What is different from othello apps is, I made this while thinking about the scalability. To make each function independent, I can easily implement new functions easily. 
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item rowSpacing={4}>
                        <Grid item>
                            <Typography variant="h5">Tetris Application</Typography>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12} sm={6} md={4}>
                                <Link href="https://othello-wheat.vercel.app/" target="_blank">
                                    <img src="/assets/test.jpeg" alt="" width="200px" height="200px"/>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8}>
                                <Typography variant="body1">
                                    Related to the Tetris, there are a lot of sources published in the internet. But, I have never seen the source whose rotation rule is same as "Tetris99", which is the most popular rule for now. 
                                </Typography>
                                <Typography variant="body1">
                                    My apps has two strong points. First, It is easy to update since I created the logics from scratch and has well independent modules. I understood what I did with my projects, it is very easy to what happens in my apps. Second, users can check out the past score. This apps uses external headless CMS, so users can create new account and check out their past score. 
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Works;