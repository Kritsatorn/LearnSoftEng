import * as React from "react";
import { LandingPageTypes } from "./LandingPageTypes";
import { SeasonDisplay } from "../../components/SeasonDisplay/SeasonDisplay";
import { BarCard } from "../../components/BarCard/BarCard";
export class LandingPage extends React.Component<object, LandingPageTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      text: "Hello",
      lat: 0,
      month: 0,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.log(err.message)
    );
    this.setState({ month: new Date().getMonth() });
  }

  render() {
    return (
      <div>
        <BarCard cardName={this.state.text} />
        <br />
        <SeasonDisplay lat={this.state.lat} month={this.state.month} />
        <div> HII world</div>
      </div>
    );
  }
}
