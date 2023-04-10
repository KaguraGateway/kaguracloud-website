import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        h1: {
            fontFamily: '"Montserrat" ,"Roboto", "Helvetica", "Arial", sans-serif',
        },
        h2: {
            fontFamily: '"Montserrat" ,"Roboto", "Helvetica", "Arial", sans-serif',
        },
        h3: {
            fontFamily: '"Montserrat" ,"Roboto", "Helvetica", "Arial", sans-serif',
        },
        h4: {
            fontFamily: '"Montserrat" ,"Roboto", "Helvetica", "Arial", sans-serif',
        },
        h5: {
            fontFamily: '"Montserrat" ,"Roboto", "Helvetica", "Arial", sans-serif',
        }
    }
});

export default theme;