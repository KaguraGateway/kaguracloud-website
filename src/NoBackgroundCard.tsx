import { Box, SvgIcon, Typography } from "@mui/material";


export interface NoBackgroundCardProps {
    title: string;
    description: string;
    icon: typeof SvgIcon;
    iconWidth?: string;
    iconHeight?: string;
}

export default function NoBackgroundCard(props: NoBackgroundCardProps) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "8px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <props.icon sx={{ width: (props.iconWidth || "128px"), height:(props.iconHeight ||  "128px") }} />
                </Box>
                <Typography component="h3" variant="h5" sx={{margin: "16px"}}>{props.title}</Typography>
                <Typography component="p" variant="body1" sx={{ margin: "8px", wordBreak: "break-all" }}>{props.description}</Typography>
            </Box>
        </Box>
    );
}