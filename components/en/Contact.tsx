import { Grid, List, ListItem, Link } from "@mui/material";
import theme from "../Theme";
import { faEnvelope, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Link {
    linkto: string;
    icon: IconDefinition;
}

interface Links {
    [key: string]: Link;
}

const links: Links = {
    mail: {
        linkto: "mailto:lutianle89@gmail.com?subject=SweetWords&body=Please send me a copy of your new program!",
        icon: faEnvelope
    },
    instagram: {
        linkto: "https://www.instagram.com/riku.kuri1234",
        icon: faInstagram
    },
    github: {
        linkto: "https://github.com/Riku-Hatano",
        icon: faGithub
    },
    top: {
        linkto: "#",
        icon: faAngleUp
    }
}
const Contact = () => {   
    return (
        <Grid container item>
            <List
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                {
                    Object.keys(links).map((item: string) => {
                        return (
                            <ListItem>
                                <Link href={links[item].linkto} sx={{width: "100%", display: "flex", justifyContent: "center"}}>
                                    <FontAwesomeIcon icon={links[item].icon} color={theme.palette.secondary.main}/>
                                </Link>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Grid>
    )     
}

export default Contact;