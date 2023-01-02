import React from "react";

import {Stack , Container , Grid} from "@mui/material"

// requires price, image , quantity
class CheckoutKit extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
                <hr></hr>
            <Grid
                justify="space-between"
                container
                sx={{marginTop : 4}}
            >
                <Grid Item>
                    <img height="120" src={this.props.image}/>
                    <h2>{this.props.name}</h2>
                </Grid>
                <Grid Item sx={{marginLeft : "80%"}}>
                    <Stack direction="column">
                        <h3>Amount : {this.props.quantity}</h3>
                        <h3>Rs {this.props.price}</h3>
                        <h3>Total Rs {this.props.price * this.props.quantity}</h3>
                    </Stack>     
                </Grid> 
            </Grid>
            <hr></hr>
            </div>
        )
    }
}

export default CheckoutKit;