import './App.css';
import React from "react"
import {Button , AppBar , Stack} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



import Kit from "./components/kit"

import Logo from "./assets/logo.jpeg"

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary : {
      main : "#7776e6",
    },
  },
});



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>
          <div className='App'>
            <AppBar position='fixed'>
                <Container maxWidth="xl">
                  
                  <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        flex : 1,
                      }}
                    >
                      STEM KITS
                    </Typography>
                    
                    <Button sx={{alignSelf : "right"}} variant="contained" className="cart-btn">cart</Button>

                  </Toolbar>
                </Container>
              </AppBar>
              
            <div className='landing'>
            </div>

            <div className='browse-title'>
              <h1>Kits</h1>
            </div>

            {/* <Grid container spacing={1}>
              <Grid item xs="auto">
                <Kit image="https://imgur.com/a/mMos19O" name="Kit 1" description="This is the STEM Kit 1"/>
              </Grid>
              <Grid item xs="auto">
                <Kit image="https://imgur.com/a/mMos19O" name="Kit 1" description="This is the STEM Kit 1"/>
              </Grid>
            </Grid> */}
            <div className='flex-container'>
              <Kit 
                image="https://imgur.com/a/mMos19O" 
                name="STEM Kit 1" 
                description="Description of STEM Kit 1"
                price="$99"
              />
              <Kit 
                image="https://imgur.com/a/mMos19O" 
                name="STEM Kit 2" 
                description="Description of STEM Kit 2"
                price="$199"
              />
            </div>
            

            <div className='footer'>
              <span>Developed by Omer Ali Malik.</span>
            </div>
          </div>
        </main>
      </ThemeProvider> 
    )
  }
}



export default App;