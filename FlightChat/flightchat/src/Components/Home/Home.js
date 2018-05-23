import React, {Component} from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Home.css";
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";


export default class Home extends Component {
    /*constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
    }*/
  
    render() {
      return (
        <div>
           <Card className="cards-temp">
                <div className="cards-style">
                <ImageHeader imageSrc="http://dreamicus.com/data/flight/flight-02.jpg" />
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
                </div>
            </Card>
            <Card className="cards-temp">
                <div className="cards-style">
                <ImageHeader imageSrc="http://dreamicus.com/data/flight/flight-02.jpg" />
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
                </div>
            </Card>
            <Card className="cards-temp">
                <div className="cards-style">
                <ImageHeader imageSrc="http://dreamicus.com/data/flight/flight-02.jpg" />
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
                </div>
            </Card>
            <Card className="cards-temp">
                <div className="cards-style">
                <ImageHeader imageSrc="http://dreamicus.com/data/flight/flight-02.jpg" />
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
                </div>
            </Card>
            <Card className="cards-temp">
                <div className="cards-style">
                <ImageHeader imageSrc="http://dreamicus.com/data/flight/flight-02.jpg" />
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
                </div>
            </Card>
        </div>
        
      );
    }
  }