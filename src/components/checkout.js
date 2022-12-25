import React from "react";
import "./checkout.css"

import {TextField , Stack , Button , Checkbox} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary : {
      main : "#7776e6",
    },
  },
});

const label = { inputProps: { 'aria-label': 'Cash on delivery' } };


export default class Checkout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            tel : "",
            zip : "",
            ad1 : "",
            ad2 : "",
            city : "",
            province : "",
        }
    }

    render(){
        return (
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="checkout-form">
            <h1>Checkout</h1>
            <Stack spacing={2}>
                <TextField 
                                size="large" 
                                label="Name" 
                                variant="outlined" 
                                value={this.state.name}
                                onChange={e => this.setState({name : e.target.value})}
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Email" 
                                variant="outlined" 
                                value={this.state.email}
                                onChange={e => this.setState({email : e.target.value})}
                                type="email"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Phone number" 
                                variant="outlined" 
                                value={this.state.tel}
                                onChange={e => this.setState({tel : e.target.value})}
                                type="tel"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Postal code" 
                                variant="outlined" 
                                value={this.state.zip}
                                onChange={e => this.setState({zip : e.target.value})}
                                type="number"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Address 1" 
                                variant="outlined" 
                                value={this.state.ad1}
                                onChange={e => this.setState({ad1 : e.target.value})}
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Address 2" 
                                variant="outlined" 
                                value={this.state.ad2}
                                onChange={e => this.setState({ad2 : e.target.value})}
                            />
                <TextField 
                                size="large" 
                                label="City" 
                                variant="outlined" 
                                value={this.state.city}
                                onChange={e => this.setState({city : e.target.value})}
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Province" 
                                variant="outlined" 
                                value={this.state.province}
                                onChange={e => this.setState({province : e.target.value})}
                                required="true"
                            />
                
            </Stack> 
            <h2>Method</h2>
            <span>Cash on delivery</span>
            <Checkbox {...label} defaultChecked />
            <br></br>
            <br></br>
            <Button size="large" variant="contained">Place order</Button>
            </div>
            </ThemeProvider>
        )
    }
}