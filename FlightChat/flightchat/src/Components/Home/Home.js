import React, {Component} from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Home.css";
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";
import $ from 'jquery'
import _                        from 'lodash';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {info: []};
    this.FlightList = this.FlightList.bind(this);
  }

  componentDidMount() {
    this.FlightList();
  }

  FlightList() {
    $.getJSON('https://flightchat.herokuapp.com/flight/flightinfo?companyCode=AA&airportCode=100&status=dep&date=2018/05/28')
      .then(({ results }) => this.setState({ info: results }));
  }


  render() {
    let infos =  _.map((item) => (
      <div>
        <h1>{item.flightStatuses}</h1>
      </div>
    )
  )

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ infos }</div>
        <Card className="cards-temp">
                <div className="cards-style">
                <ImageHeader imageSrc="http://dreamicus.com/data/flight/flight-02.jpg" />
                <CardBody>{infos.flightStatuses}</CardBody>
                
                </div>
            </Card>
      </div>
    );
  }
}