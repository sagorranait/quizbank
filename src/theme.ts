import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   palette: {
      primary: {
         main: '#3751FF'
      },
      secondary: {
         main: '#F7F8FC',
         light: '#ADAEB2',
      },
   },
   typography: {
      fontFamily: 'Poppins, sans-serif',
   },
});

export default theme;
