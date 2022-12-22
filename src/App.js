import './App.css';
import React from "react"
import {Button , AppBar , Grid} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Kit from "./components/kit"

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
              <Button>test</Button>
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
              <Kit image="https://imgur.com/a/mMos19O" name="STEM Kit 1" description="Description of STEM Kit 1"/>
              <Kit image="https://imgur.com/a/mMos19O" name="STEM Kit 2" description="Description of STEM Kit 2"/>
            </div>
            

            <div className='footer'>
              <span>Developed by Omer Ali Malik</span>
            </div>
          </div>
        </main>
      </ThemeProvider> 
    )
  }
}



export default App;