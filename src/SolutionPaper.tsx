import { Box, Paper, SvgIcon, Typography } from "@mui/material";

export interface SolutionPaperProps {
    title: string;
    icon: typeof SvgIcon;
    description: string;
}

export default function SolutionPaper(props: SolutionPaperProps) {
    return (
        <Paper>
            <Box sx={{ display: "flex", justifyContent: "center", padding: "8px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <props.icon sx={{ width: "128px", height: "128px" }} />
                    </Box>
                    <Typography component="h3" variant="h5">{props.title}</Typography>
                    <Typography component="p" variant="body1" sx={{ margin: "8px", wordBreak: "break-all" }}>{props.description}</Typography>
                </Box>
            </Box>
        </Paper>
    );
}