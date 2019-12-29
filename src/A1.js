import React, { Component } from "react";

class A1 extends Component {
  componentWillMount() {
    console.log("component will mount in A1");
  }
  componentDidMount() {
    console.log("component did mount in A1");
  }
  shouldComponentUpdate() {
    console.log("component should update in A1");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update in A1");
  }
  componentDidUpdate() {
    console.log("component did update in A1");
  }
  render() {
    return (
      <div>
        <h1>maaz A1</h1>
      </div>
    );
  }
}

export default A1;
