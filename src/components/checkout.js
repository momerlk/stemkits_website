import React from "react";
import "./checkout.css"
import {TextField , Stack , Button , Checkbox , Snackbar , Alert , IconButton, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CssBaseline from '@mui/material/CssBaseline';

import CheckoutKit from "./checkout_kit"




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary : {
      main : "#7776e6",
    },
  },
});

const label = { inputProps: { 'aria-label': 'Cash on delivery' } };


const kit1_product_id = "392902390";

const kit2_product_id = "43290123";

function reset_count(){
    localStorage.setItem('count' ,"0")
    localStorage.setItem(kit1_product_id , "0");
    localStorage.setItem(kit2_product_id , "0");  
  }

export class Order {
    constructor(name , email , tel , zip , address1 , address2 , city , province ){
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.zip = zip;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.province = province;
        this.country = "Pakistan";
    }

    place(){
        let err = false;
        const url = "";

        const data = {
            name : this.name,
            email : this.email,
            tel : this.tel,
            zip : this.zip,
            address1 : this.address1,
            address2 : this.address2,
            city : this.city,
            province : this.province,
            country : this.country,
            kit1Count : localStorage.getItem(kit1_product_id),
            kit2Count : localStorage.getItem(kit2_product_id),
        }

        

        

        return err;
    }

}


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

            showMsg : false,
            msg : "",

            showErr : false,
            err : "",
        }
    }

    snackbar(msg){
        this.setState({msg : msg})
        this.setState({showMsg : true})
    }

    error(err){
        this.setState({err : err})
        this.setState({showErr : true})
    }

    componentDidMount(){

    }

    // quantity of kit1
    getKit1Q(){
        return parseInt(localStorage.getItem("392902390"));
    }
    getkit2Q(){
        return parseInt(localStorage.getItem("43290123"));
    }

    getTotal(){
        return (this.props.kit1Price * this.getKit1Q()) + (this.props.kit2Price * this.getkit2Q());
    }

    render(){
        return (
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="checkout-form">
            <IconButton onClick={() => this.props.change()} className="back">
                <ArrowBackIcon />
            </IconButton>
            <h1>Checkout</h1>
            <CheckoutKit 
                image={this.props.kit1Image} 
                price={this.props.kit1Price} 
                quantity={this.getKit1Q()}
                name="S.T.E.M Kit 1"
            />
            <CheckoutKit 
                image={this.props.kit2Image} 
                price={this.props.kit2Price} 
                quantity={this.getkit2Q()}
                name="S.T.E.M Kit 2"
            />
            <Typography variant="h5" sx={{marginTop : 4 , marginBottom : 4}}>Total Rs {this.getTotal()}</Typography>
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
            <Button size="large" variant="contained" onClick={
                async () => {

                    if (this.state.name === "" || this.state.email === "" || this.state.tel === "" || this.state.zip === "" || this.state.address1 === "" || this.state.address2 === "" || this.state.city === "" || this.state.province === "" ){
                        this.error(`please fill the required details`);
                        return;
                    }
                    
                    const url = "https://data.mongodb-api.com/app/data-ekngi/endpoint/data/v1/action/insertOne";

                    const data = {
                        name : this.state.name,
                        email : this.state.email,
                        tel : this.state.tel,
                        zip : this.state.zip,
                        address1 : this.state.address1,
                        address2 : this.state.address2,
                        city : this.state.city,
                        province : this.state.province,
                        country : this.state.country,
                        kit1Count : localStorage.getItem(kit1_product_id),
                        kit2Count : localStorage.getItem(kit2_product_id),
                    }


                    this.setState({
                        name : "",
                        email : "",
                        tel : "",
                        zip : "",
                        ad1 : "",
                        ad2 : "",
                        city : "",
                        province : "",
                    });

                    reset_count();
                    this.snackbar("Successfully placed order!")
                    
                }
            }>Place order</Button>
            <Snackbar
                        open={this.state.showMsg}
                        autoHideDuration={5000}
                        onClose={() => this.setState({showMsg : false})}
                    >
                        <Alert severity="success" sx={{ width: '100%' , color : "white" }}>
                            {this.state.msg}
                        </Alert>
                    </Snackbar>

            <Snackbar
                        open={this.state.showErr}
                        autoHideDuration={5000}
                        onClose={() => this.setState({showErr : false})}
                    >
                        <Alert severity="error" sx={{ width: '100%' , color : "white" }}>
                            {this.state.err}
                        </Alert>
                    </Snackbar>
            </div>
            </ThemeProvider>
        )
    }
}