import React from "react";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  state = { lat: null, errMess: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
        this.setState({ errMess: err.message });
      }
    );
  }

  render() {
    if (this.state.errMess && !this.state.lat) {
      return <div>Error: {this.state.errMess}</div>;
    }
    if (!this.state.errMess && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
export default App;
