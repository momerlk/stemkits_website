import {Card , CardActions , CardMedia , CardContent , Button , Typography , TextField} from "@mui/material";
import React from "react";

class KitComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity : "",
        };
    }

    render(){
        return (
            <div>
                <Card sx={{ maxWidth: 800 , marginLeft : 2 , paddingBottom: 2}}>
                    <CardMedia
                        component="img"
                        alt="Kit Image"
                        height="400"
                        src="https://i0.wp.com/sciencestore.pk/wp-content/uploads/2020/08/kit-3.0.jpg?fit=1650%2C1275&ssl=1"
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
                            <TextField size="small" label="Quantity" variant="outlined" 
                            value={this.state.quantity}
                            onChange={e => this.setState({quantity : e.target.value})}/>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" 
                            onClick={
                                () => {
                                    if (this.state.quantity === ""){
                                        this.props.add("0");
                                    }
                                    else {
                                        this.props.add(this.state.quantity)
                                    } 
                                    this.setState({quantity : ""})
                                }
                            }
                        sx={{marginLeft : 1}}>Add to Cart</Button>
                        <Button size="medium" variant="contained" color="error" 
                            onClick={
                                () => {
                                    this.props.remove();
                                    this.setState({quantity : ""})
                                }
                            }
                        sx={{marginLeft : 1}}>Remove from Cart</Button>
                    </CardActions>
                    </Card>
            </div>
        )
    }
}

export default KitComponent;