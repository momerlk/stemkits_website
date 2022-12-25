import React from "react";
import "./checkout.css"

import {TextField , Button} from "@mui/material";

class Checkout extends React.Component {
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
            <div className="checkout-form">
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
                                label="email" 
                                variant="outlined" 
                                value={this.state.email}
                                onChange={e => this.setState({email : e.target.value})}
                                type="email"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Quantity" 
                                variant="outlined" 
                                value={this.state.tel}
                                onChange={e => this.setState({tel : e.target.value})}
                                type="tel"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Quantity" 
                                variant="outlined" 
                                value={this.state.quantity}
                                onChange={e => this.setState({quantity : e.target.value})}
                                type="number"
                                min="0"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Quantity" 
                                variant="outlined" 
                                value={this.state.quantity}
                                onChange={e => this.setState({quantity : e.target.value})}
                                type="number"
                                min="0"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Quantity" 
                                variant="outlined" 
                                value={this.state.quantity}
                                onChange={e => this.setState({quantity : e.target.value})}
                                type="number"
                                min="0"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Quantity" 
                                variant="outlined" 
                                value={this.state.quantity}
                                onChange={e => this.setState({quantity : e.target.value})}
                                type="number"
                                min="0"
                                required="true"
                            />
                <TextField 
                                size="large" 
                                label="Quantity" 
                                variant="outlined" 
                                value={this.state.quantity}
                                onChange={e => this.setState({quantity : e.target.value})}
                                type="number"
                                min="0"
                                required="true"
                            />
                
            </div>
        )
    }
}