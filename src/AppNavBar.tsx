import { AppBar, Box, Container, createStyles, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import logoPng from '../public/assets/images/logo.png';

const useStyles = makeStyles(() => ({
    logoImage: {
        display: "inline-block",
    }
}));

export default function AppNavBar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href="https://kagura.cloud">
                        <Image className={classes.logoImage} src={logoPng} alt="Kagura Cloud" width="100%" height="56px" />
                    </a>
                </Toolbar>
            </Container>
        </AppBar>
    )
}