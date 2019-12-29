import React, { Component } from "react";
import A1 from "./A1";
import A2 from "./A2";

class A extends Component {
  componentWillMount() {
    console.log("component will mount in A");
  }

  componentDidMount() {
    console.log("component did mount in A");
  }
  shouldComponentUpdate() {
    //console.log("component should update in A");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update in A");
  }
  componentDidUpdate() {
    console.log("component did update in A");
  }
  render() {
    return (
      <div>
        <h3>A calling "A1" & "A2"</h3>

        <A1></A1>
        <A2></A2>
      </div>
    );
  }
}

export default A;
