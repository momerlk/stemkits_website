import {Card , CardActions , CardMedia , CardContent , Button , Typography} from "@mui/material";
import React from "react";

class KitComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
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
                            <br></br>
                            {this.props.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {this.props.description} 
                            
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" onClick={
                            () => {

                            }
                        }
                        sx={{marginLeft : 1}}>Add to Cart</Button>
                    </CardActions>
                    </Card>
            </div>
        )
    }
}

export default KitComponent;