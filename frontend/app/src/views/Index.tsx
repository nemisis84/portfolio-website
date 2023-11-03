import { CssBaseline, createTheme, Typography } from '@mui/material';
import { Grid, Paper } from '@mui/material';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { meme1, meme2 } from '../assets'; 

export function Index() {
    const theme = createTheme();
  
    return (
      <div>
        <CssBaseline />
        <Header/>
        <Grid container spacing={3} style={{ padding: '20px' }}>
          {/* Left Side */}
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5">Left Title</Typography>
              <img src={meme1} alt="Left Description" width="100%" />
              <Typography variant="body1">Some description text for the left side.</Typography>
            </Paper>
          </Grid>
  
          {/* Right Side */}
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5">Right Title</Typography>
              <img src={meme2} alt="Right Description" width="100%" />
              <Typography variant="body1">Some description text for the right side.</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Footer/>
      </div>
    );
  }