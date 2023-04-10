import { AppBar, Box, Container, createStyles, Toolbar, Typography } from "@mui/material";
import Image from 'next/image';
import logoPng from '../public/assets/images/logo.png';

export default function AppNavBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href="https://kagura.cloud">
                        <Image src={logoPng} alt="Kagura Cloud" />
                    </a>
                </Toolbar>
            </Container>
        </AppBar>
    )
}