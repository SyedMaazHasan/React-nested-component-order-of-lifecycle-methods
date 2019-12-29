import React, { Component } from "react";
import B1 from "./B1";
import B2 from "./B2";

class B extends Component {
  componentWillMount() {
    console.log("component will mount in B");
  }
  componentDidMount() {
    console.log("component did mount in B");
  }
  shouldComponentUpdate() {
    // console.log("component should update in B");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update in B");
  }
  componentDidUpdate() {
    console.log("component did update in B");
  }
  render() {
    return (
      <div>
        <h3>maaz B</h3>
        <B1></B1>
        <B2></B2>
      </div>
    );
  }
}

export default B;
