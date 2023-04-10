import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

export interface BasicImageCardProps {
    title: string;
    description: string;
    imageSrc: StaticImageData;
}

export default function BasicImageCard(props: BasicImageCardProps) {
    return (
        <Paper>
            <Box>
                <Image src={props.imageSrc} alt={props.title} layout="responsive"></Image>
            </Box>
            <Box>
                <Typography component="h3" variant="h5" sx={{margin: "16px"}}>{props.title}</Typography>
                <Typography component="p" variant="body1" sx={{ margin: "16px", wordBreak: "break-all" }}>{props.description}</Typography>
            </Box>
        </Paper>
    );
}