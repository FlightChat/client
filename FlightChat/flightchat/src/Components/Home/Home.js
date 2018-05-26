import React, {Component} from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Home.css";
//import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";
import $ from 'jquery'


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {info: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    $.getJSON('https://flightchat.herokuapp.com/flight/flightinfo?companyCode=AA&airportCode=100&status=dep&date=2018/05/28')
      .then(({ results }) => this.setState({ info: results }));
  }

  render() {
    let infos = this.state.info.map((item) => (
      <div>
        <h1>{this.url}</h1>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ infos }</div>
      </div>
    );
  }
}
        /*<div>
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
*/