import React, { Component } from "react";
import A from "./A";
import B from "./B";
class RootComp extends Component {
  componentWillMount() {
    console.log("component will mount in root");
  }
  componentDidMount() {
    console.log("component did mount in root");
  }
  shouldComponentUpdate() {
    console.log("component should update in root");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update in root");
  }
  componentDidUpdate() {
    console.log("component did update in root");
  }
  clicked = () => {
    this.shouldComponentUpdate();
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <h1>
          A Comp <A></A>B component <B></B>
          <button onClick={this.clicked}>clickme</button>
        </h1>
      </div>
    );
  }
}

export default RootComp;
