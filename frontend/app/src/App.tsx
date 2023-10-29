import './App.css';
import { CssBaseline, ThemeProvider, createTheme, Typography } from '@mui/material';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h1">Hello World</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;

