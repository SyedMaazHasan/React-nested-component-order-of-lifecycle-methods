import React, { Component } from "react";

class A2 extends Component {
  componentWillMount() {
    console.log("component will mount in A2");
  }
  componentDidMount() {
    console.log("component did mount in A2");
  }
  shouldComponentUpdate() {
    //console.log("component should update in A2");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update in A2");
  }
  componentDidUpdate() {
    console.log("component did update in A2");
  }
  render() {
    return (
      <div>
        <h5>maaz A2</h5>
      </div>
    );
  }
}

export default A2;
