import { AppBar, Box, Container, createStyles, Toolbar, Typography } from "@mui/material";
import Image from 'next/image';
import logoPng from '../public/assets/images/logo.png';

export default function AppNavBar() {
    return (
        <AppBar position="static" sx={{height: "64px"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href="https://kagura.cloud">
                        <Image src={logoPng} alt="Kagura Cloud" width="100" height="56" />
                    </a>
                </Toolbar>
            </Container>
        </AppBar>
    )
}