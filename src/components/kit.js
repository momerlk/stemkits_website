import {Card , CardActions , CardMedia , CardContent , Button , Typography , TextField , Snackbar} from "@mui/material";
import React from "react";

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class KitComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity : "",
            showMsg : false,
            msg : "",
            showErr : false,
            err : "",
        };
    }

    snackbar(msg){
        this.setState({msg : msg})
        this.setState({showMsg : true})
    }
    error(err){
        this.setState({err : err})
        this.setState({showErr : true})
    }

    render(){
        return (
            <div>
                <Card sx={{ maxWidth: 600  , marginLeft : 2.5 , marginBottom : 2 , paddingBottom: 2 , fontFamily: 'Montserrat'}}>
                    <CardMedia
                        component="img"
                        alt="Kit Image"
                        height="400"
                        src={this.props.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.props.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {this.props.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {this.props.description} 
                            <br></br>
                            <br></br>
                            <TextField 
                                size="small" 
                                label="Quantity" 
                                variant="outlined" 
                                value={this.state.quantity}
                                onChange={e => this.setState({quantity : e.target.value})}
                                type="number"
                                min="0"
                                required="true"
                            />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" 
                            onClick={
                                () => {
                                    if (parseInt(this.state.quantity) === NaN) {
                                        this.setState({quantity : ""});
                                        this.error(`please choose a numerical value`)
                                        return; 
                                    }
                                    if (parseInt(this.state.quantity) < 1 || parseInt(this.state.quantity) > 99) {
                                        this.setState({quantity : ""});
                                        this.error(`quantity cannot be less than 1 or more than 99`)
                                        return; 
                                    }
                                    if (this.state.quantity === ""){
                                        this.setState({quantity : ""});
                                        this.error(`please select a quantity`)
                                        return;
                                    }
                                    else {
                                        this.props.add(this.state.quantity)
                                    }
                                    this.snackbar(`${this.state.quantity} ${this.props.name.toLowerCase()}s added to cart`)
                                    this.setState({quantity : ""})
                                }
                            }
                        sx={{marginLeft : 1}}>Add to Cart</Button>
                        <Button size="medium" variant="contained" color="error" 
                            onClick={
                                () => {
                                    this.props.remove();
                                    this.setState({quantity : ""})
                                    this.snackbar(`removed ${this.props.name.toLowerCase()} from cart`)
                                }
                            }
                        sx={{marginLeft : 1}}>Remove from Cart</Button>
                    </CardActions>
                    </Card>
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
        )
    }
}

export default KitComponent;