import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Head from 'next/head';
import Image from 'next/image'
import AppNavBar from '../src/AppNavBar';
import AppFooter from '../src/AppFooter';
import { Grid, Paper } from '@mui/material';
import katamachiPic from "../public/assets/images/IMG_6211.jpg";
import utatuyamaPic from "../public/assets/images/IMG_8220.jpg";
import kanazawaPic from "../public/assets/images/IMG_9424.jpg";
import kougyouServerPic from "../public/assets/images/kogyo.png";
import lackPic from "../public/assets/images/lack.jpg";
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import SolutionPaper, { SolutionPaperProps } from '../src/SolutionPaper';
import DvrIcon from '@mui/icons-material/Dvr';
import LanIcon from '@mui/icons-material/Lan';
import SchoolIcon from '@mui/icons-material/School';
import NoBackgroundCard, { NoBackgroundCardProps } from '../src/NoBackgroundCard';
import HttpsIcon from '@mui/icons-material/Https';
import HubIcon from '@mui/icons-material/Hub';
import FiveGIcon from '@mui/icons-material/FiveG';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import BasicImageCard, { BasicImageCardProps } from '../src/BasicImageCard';

const solutions: Array<SolutionPaperProps> = [
    {
        title: "Virtual Machine",
        icon: ComputerIcon,
        description: "You can easily create a virtual machine."
    },
    {
        title: "Storage",
        icon: StorageIcon,
        description: "You can use as large as 0B of storage."
    },
    {
        title: "Development",
        icon: DvrIcon,
        description: "You can easily create a garbage code."
    },
    {
        title: "Network",
        icon: LanIcon,
        description: "You can easily practice networking."
    },
    {
        title: "Learning",
        icon: SchoolIcon,
        description: "You can easily do a journal club."
    }
]

const requirements: Array<NoBackgroundCardProps> = [
    {
        title: "Secure",
        description: "Security Management by NewJob Experts.",
        icon: HttpsIcon,
        iconWidth: "64px",
        iconHeight: "64px"
    },
    {
        title: "Integration",
        description: "Cloud services with integration.",
        icon: HubIcon,
        iconWidth: "64px",
        iconHeight: "64px"
    },
    {
        title: "5G",
        description: "Development with a view to 5G and beyond",
        icon: FiveGIcon,
        iconWidth: "64px",
        iconHeight: "64px"
    },
    {
        title: "Scalable",
        description: "You can expand and contract freely. As you wish.",
        icon: ZoomOutMapIcon,
        iconWidth: "64px",
        iconHeight: "64px"
    }
];

const customers: Array<BasicImageCardProps> = [
    {
        title: "Aika Alchemy and Industrial MOD Server",
        description: "Experience a new Minecraft with alchemy and industrialization mods.",
        imageSrc: kougyouServerPic
    }
];


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>KaguraCloud</title>
            </Head>
            <AppNavBar />
            <Box sx={{position: "relative"}}>
                <Box sx={{width: "100%", height: "100%", minHeight: "400px"}}>
                    <Image src={katamachiPic} alt="片町夜景" layout="fill" objectFit="cover" objectPosition="bottom"></Image>
                </Box>
                <Box sx={{position: "absolute", top: "15%", left: "10%", color: "#ffffff"}}>
                    <Box sx={{position: "relative"}}>
                        <Typography component="h1" variant="h3" sx={{color: "#ffffff"}}>Why choose Kagura Cloud?</Typography>
                        <Typography component="h1" variant="h4" sx={{marginTop: "16px"}}>So Cheep, Secure, Low availability, and New Job</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", backgroundColor: "#f2f4f4"}}>
                <Box sx={{display: "flex", flexDirection: "column", padding: "48px 0"}}>
                    <Typography component="h1" variant="h3" sx={{textAlign: "center"}}>Solution</Typography>
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginTop: "16px",
                        '& > :not(style)': {
                            m: 1,
                            width: "256px",
                            height: "256px"
                        }
                    }}>
                        {solutions.map((solution, index) => (
                            <SolutionPaper key={index} {...solution} />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box sx={{padding: "48px 0"}}>
                <Container>
                    <Box>
                        <Typography component="h1" variant="h3" sx={{textAlign: "center"}}>How do you solve a business problem?</Typography>
                        <Typography component="p" variant="body1" sx={{marginTop: "16px", textAlign: "center", color: "#585858"}}>We have endured any NewJob.
    For example, cleaning, computer maintenance, taking out the trash, etc.
    That&apos;s what we&apos;ve put to use in this Kagura Cloud.
    With Kagura Cloud, your problems will be solved by NewJob experts.
    You will be amazed at our low technology and high awareness!
    With our involvement in the development process, garbage code is created in no time.
    This is a joke.
    If you pay us 1 BTC, you will get a conscious and readable code.
    Kagura Cloud, a NewJob expert, is a must for your project.
    This is the only way your project will be successful.
    These are the NewJob experts of Kagura Cloud.
    </Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{padding: "48px 0", backgroundColor: "#0a0a0a", color: "#ffffff"}}>
                <Container>
                    <Box>
                        <Typography component="h1" variant="h3" sx={{textAlign: "center"}}>We can meet even the most stringent technical requirements.</Typography>
                        <Box sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            marginTop: "16px",
                            '& > :not(style)': {
                                m: 1,
                                width: "256px",
                                height: "256px"
                            }
                        }}>
                            {requirements.map((requirement, index) => (
                                <NoBackgroundCard key={index} {...requirement} />
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{paddingTop: "48px"}}>
                <Container>
                    <Box>
                        <Typography component="h1" variant="h3" sx={{textAlign: "center"}}>Environmentally friendly</Typography>
                        <Typography component="p" variant="body1" sx={{marginTop: "16px", textAlign: "center", color: "#585858"}}>We are striving for the realization of a sustainable society.
Build an environmentally friendly data center.
This is the mission of Kagura Cloud.
We do not cool the data center all the time, but always use the power of nature to cool the data center, taking advantage of its location in a cold region.
    </Typography>
                    </Box>
                </Container>
                <Box sx={{marginTop: "16px"}}>
                    <Image src={utatuyamaPic} alt="山" layout="responsive"></Image>
                </Box>
            </Box>
            <Box sx={{padding: "48px 0", backgroundColor: "#f2f4f4"}}>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={6}>
                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%"}}>
                            <Typography component="h1" variant="h3" sx={{textAlign: "center"}}>Innovative</Typography>
                            <Typography component="p" variant="body1" sx={{marginTop: "16px", textAlign: "center", color: "#585858"}}>Kagura Cloud provides a service that allows you to reject NewJob.
This is good news for the world&apos;s 7.8 billion people.
Where does the rejected NewJob go?
We don&apos;t know that.
It will probably go to the Cartoon Research Society.
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <Image src={kanazawaPic} alt="金沢駅" layout="responsive"></Image>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{padding: "48px 0"}}>
                <Typography component="h1" variant="h3" sx={{textAlign: "center"}}>Customers</Typography>
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginTop: "16px",
                        '& > :not(style)': {
                            m: 1,
                            width: "384px",
                            height: "384px"
                        }
                    }}>
                        {customers.map((customer, index) => (
                            <BasicImageCard key={index} {...customer} />
                        ))}
                    </Box>
            </Box>
            <Box sx={{padding: "48px 0", backgroundColor: "#f2f4f4"}}>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={6}>
                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%"}}>
                            <Typography component="h1" variant="h3" sx={{textAlign: "center"}}>Take it easy</Typography>
                            <Typography component="p" variant="body1" sx={{marginTop: "16px", textAlign: "center", color: "#585858"}}>You may also want to install a layer 3 switching hub in your home.
L3SW is the solution to everything.
Even the difficult NewJob.
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <Image src={lackPic} alt="金沢駅" layout="responsive"></Image>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <AppFooter />
        </>
    );
};

export default Home;