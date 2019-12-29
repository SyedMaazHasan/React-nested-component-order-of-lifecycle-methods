import React, { Component } from "react";

class B1 extends Component {
  componentWillMount() {
    console.log("component will mount in B1");
  }
  componentDidMount() {
    console.log("component did mount in B1");
  }
  shouldComponentUpdate() {
    console.log("component should update in B1");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update in B1");
  }
  componentDidUpdate() {
    console.log("component did update in B1");
  }
  render() {
    return (
      <div>
        <h1>maaz B1</h1>
      </div>
    );
  }
}

export default B1;
