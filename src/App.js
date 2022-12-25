import './App.css';
import React from "react"
import {AppBar , Badge , Tooltip} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Kit from "./components/kit"

import kit1Img from "./assets/kit1.jpg"
import kit2Img from "./assets/kit2.png"

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary : {
      main : "#7776e6",
    },
  },
});

const shop_name = "{shop}"

const kit1_product_id = "392902390";

const kit2_product_id = "43290123";


function reset_count(){
  localStorage.setItem('count' ,"0")
  localStorage.setItem(kit1_product_id , "0");
  localStorage.setItem(kit2_product_id , "0");  
}

class App extends React.Component {
  constructor(props){
    super(props);

    if (localStorage.getItem("count") === "NaN" || localStorage.getItem("count") === null){
      reset_count();
    }
    if (localStorage.getItem(kit1_product_id) === "NaN" || localStorage.getItem("count") === null){
      reset_count();
    }
    if (localStorage.getItem(kit2_product_id) === "NaN" || localStorage.getItem("count") === null){
      reset_count();
    }


    this.state = {
      kit1Count : localStorage.getItem(kit1_product_id),
      kit2Count : localStorage.getItem(kit2_product_id),
      productCount : localStorage.getItem('count'),
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
                      
                    <Badge badgeContent={localStorage.getItem("count")} color="primary" sx={{marginTop : 2}}>
                      <Tooltip title="checkout">
                        <IconButton size="large" onClick={() => {
                          // clicking this button will redirect to shopify cart permalink
                          let url = `http://${shop_name}.myshopify.com/cart/${kit1_product_id}:${this.state.kit1Count},${kit2_product_id}:${this.state.kit2Count}                          `
                          window.location.href = "/stemkits_website/checkout";
                        }}>
                          <ShoppingCartIcon />
                        </IconButton>
                      </Tooltip>
                    </Badge>

                  </Toolbar>
                </Container>
              </AppBar>
              
            <div className='landing'>
            </div>

            <div className='browse-title'>
              <h1>Kits</h1>
            </div>

            <div className='flex-container'>
              <Kit 
                image={kit1Img}
                name="S.T.E.M Kit 1" 
                description={(
                  <div>
                    <h3>Experiments</h3>
                    1. Non-Newtonian Fluids  
                    <br></br>
                    2. Elephant's Toothpaste 
                    <br></br>
                    3. Lava Lamp

                    <h3>Components</h3>
                    1.Hydrogen peroxide
                    <br></br>
                    2.Liquid dishwashing soap
                    <br></br>
                    3.Dry yeast
                    <br></br>
                    4.Cornstarch
                    <br></br>
                    5.Vegetable Oil
                    <br></br>
                    6.Baking soda
                    <br></br>
                    7.Vinegar
                  </div>
                )}
                price="$99"
                add={quantity => {
                  // set kit1count to be quantity
                  localStorage.setItem(kit1_product_id , quantity);
                  this.setState({kit1Count : quantity});

                  // set total count to be count of kit2
                  localStorage.setItem('count' , localStorage.getItem(kit2_product_id));
                  this.setState({productCount : localStorage.getItem(kit2_product_id)});

                  // add quantity of kit2 to total count
                  let count = parseInt(localStorage.getItem('count'));
                  count += parseInt(quantity);
                  localStorage.setItem('count' , count.toString());
                  this.setState({productCount : count.toString()});
                }}
                remove={() => {
                  // update total count to not include count of kit1
                  let count = parseInt(localStorage.getItem('count'));
                  count -= parseInt(localStorage.getItem(kit1_product_id));
                  localStorage.setItem('count' , count.toString());
                  this.setState({productCount : count.toString()});


                  // set kit1 count to 0
                  localStorage.setItem(kit1_product_id , "0");
                  this.setState({kit1Count : "0"});
                  
                }}
              />
              <Kit 
                image={kit2Img}
                name="S.T.E.M Kit 2" 
                description={(
                  <div>
                    <h3>Projects</h3>
                    1.Obstacle Avoiding Car
                    <br></br>
                    2.Temperature Sensor
                    <br></br>
                    3.Password secured lock
                    <h3>Components</h3>
                    1.Arduino Uno
                    <br></br>
                    2.Ultrasonic Sensor
                    <br></br>
                    3.Geared motors
                    <br></br>
                    4.Jumper wires
                    <br></br>
                    5.Infrared recievers and remote
                    <br></br>
                    6.Thermistors and LDR
                    <br></br>
                    {"."}
                  </div>
                )}
                price="$199"
                add={quantity => {
                  // set kit2count to be quantity
                  localStorage.setItem(kit2_product_id , quantity);
                  this.setState({kit2Count : quantity});

                  // set total count to be count of kit1
                  localStorage.setItem('count' , localStorage.getItem(kit1_product_id));
                  this.setState({productCount : localStorage.getItem(kit1_product_id)});
                  
                  // add quantity of kit2 to total count
                  let count = parseInt(localStorage.getItem('count'));
                  count += parseInt(quantity);
                  localStorage.setItem('count' , count.toString());
                  this.setState({productCount : count.toString()});
                }}
                remove={() => {
                  
                  // update count to not include count of kit2
                  let count = parseInt(localStorage.getItem('count'));
                  count -= parseInt(localStorage.getItem(kit2_product_id));
                  localStorage.setItem('count' , count.toString());
                  this.setState({productCount : count.toString()});

                  
                  // set kit2 count to be 0
                  localStorage.setItem(kit2_product_id , "0");
                  this.setState({kit1Count : "0"});
                }}
              />
            </div>

            <div className='about-us'>
              <h2>About Us</h2>
              <p>STEM Kits are ready-made, comprehensive kits that can be purchased online. Each kit consists of several experiments that can be performed either by an individual, or in groups. The kits can be purchased off of the website, or requested for pickup from specific locations across Lahore. 
              </p>
            </div>

            <div className='our-mission'>
              <h2>Our Mission</h2>
              <p>The thought process that went behind STEM Kits come as an outcome of a lack of readily available science experiments in countries like Pakistan. Countries with immense untouched talent but with no facilities to nurture it. STEM Kits hopes to make scientific learning inexpensive, innovative and available to all, one kit at a time. </p>
            </div>

            <div className='comm-outreach'>
              <h2>Community Outreach</h2>
              <p>With the goal of making kits more accessible, the STEM Kits team plans to donate all profits made off the Kits for constructing similar models for the underprivileged communities, teaching the basics of various scientific concepts to those deprived of such resources. </p>
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