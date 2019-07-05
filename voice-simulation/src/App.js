import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    background: {
        default: '#f5f5f5'
    },
    primary: {
      light: '#fff',
      main: '#0C4676',
      dark: '#2a343d'
    },
    secondary: {
        main: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div />
    </MuiThemeProvider>
  );
}

export default App;
