import './App.css';
import React from "react"
import {AppBar , Badge , Tooltip} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Kit from "./components/kit"

import kit1Img from "./assets/kit1.jpg"
import kit2Img from "./assets/kit2.jpg"

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

const kit1_product_id = "{kit1-product-id]";
// const kit1_image = "";
// const kit1_name = "STEM Kit 1";
// const kit1_description = "Description of STEM Kit 1";
// const kit1_price = "$99";

const kit2_product_id = "{kit2-product-id]";
// const kit2_image = "";
// const kit2_name = "STEM Kit 2";
// const kit2_description = "Description of STEM Kit 2";
// const kit2_price = "$199";

class App extends React.Component {
  constructor(props){
    super(props);
    // below code caused data to be lost if page was refreshed
    // localStorage.setItem('count' ,"0")
    // localStorage.setItem(kit1_product_id , "0");
    // localStorage.setItem(kit2_product_id , "0");  

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
                          window.location.href = url;
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
                name="STEM Kit 1" 
                description="Description of STEM Kit 1"
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
                name="STEM Kit 2" 
                description="Description of STEM Kit 2"
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