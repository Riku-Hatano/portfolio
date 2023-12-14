const Works = () => {
    return (
        <>
            <section className="works" id="works">
                <h1>works</h1>
                <section>
                    <figure>
                        <a href="https://othello-wheat.vercel.app/" className="worksContainer" target="_blank">
                        </a>
                        <figcaption>
                            <h3>Othello Application</h3>
                            <p>
                                Have you ever seen othello puzzle in SNS or something? 
                            </p>
                            <p>
                                If so, and want to think seriously, this apps is very useful. 
                            </p>
                            <p>
                                This apps has an edit board mode. In this mode, we can place pieces as you want and start the game with specific situation.
                            </p>
                            <p>
                                As far as I know, there are no free othello apps in AppStore for now. So, I hope this will help othello player who want to fix othello puzzle for free. 
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="https://chessgame-one.vercel.app/game" className="worksContainer" target="_blank">
                        </a>
                        <figcaption>
                            <h3>Chess Application</h3>
                            <p>
                                This apps hasn't have edit mode yet, but this mode will be comming soon. 
                            </p>
                            <p>
                                As far as I know, same as othello apps, I have never seen chess apps that can edit the board or make specific situation. This is also good for solving puzzle.
                            </p>
                            <p>
                                What is different from othello apps is, I made this while thinking about the scalability. To make each function independent, I can easily implement new functions easily. 
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="https://tetris-riku-hatano.vercel.app" className="worksContainer" target="_blank">
                        </a>
                        <figcaption>
                            <h3>Tetris Application</h3>
                            <p>
                                Related to the Tetris, there are a lot of sources published in the internet. But, I have never seen the source whose rotation rule is same as "Tetris99", which is the most popular rule for now. 
                            </p>
                            <p>
                                My apps has two strong points. First, It is easy to update since I created the logics from scratch and has well independent modules. I understood what I did with my projects, it is very easy to what happens in my apps. Second, users can check out the past score. This apps uses external headless CMS, so users can create new account and check out their past score. 
                            </p>
                        </figcaption>
                    </figure>
                </section>
            </section>
        </>
    )
}

export default Works;