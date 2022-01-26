import { Box } from "@mui/material";
import Copyright from "./Copyright";

export default function AppFooter() {
    return (
        <footer>
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Copyright />
            </Box>
        </footer>
    )
}