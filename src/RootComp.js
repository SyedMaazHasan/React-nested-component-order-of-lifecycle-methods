import React, { Component } from "react";
import logo from "./nestedComponents.jpg";
//import logo from "./nestedComponents.jpeg";
import A from "./A";
import B from "./B";
class RootComp extends Component {
  componentWillMount() {
    console.log("################ MOUNTING PHASE ##################");
    console.log("**** Before Render ********");
    console.log("component will mount in root");
  }
  componentDidMount() {
    console.log("component did mount in root");
  }
  shouldComponentUpdate() {
    // console.log("component should update in root");
    return true;
  }
  componentWillUpdate() {
    console.log("################ UPDATION PHASE ##################");
    console.log("**** Before Render ********");
    console.log("component will update in root");
  }
  componentDidUpdate() {
    console.log("component did update in root");
  }
  clicked = () => {
    console.log("------------------");
    this.shouldComponentUpdate();
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <img src={logo} width="500" height="300" />
        <h1>Root Component calling "A" & "B"</h1>
        <A></A>
        <B></B>

        <button onClick={this.clicked}>click me to go in updation phase</button>
      </div>
    );
  }
}

export default RootComp;
