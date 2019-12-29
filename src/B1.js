import React, { Component } from "react";

class B1 extends Component {
  componentWillMount() {
    console.log("component will mount in B1");
  }
  componentDidMount() {
    console.log("component did mount in B1");
  }
  shouldComponentUpdate() {
    // console.log("component should update in B1");
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
        <h5>B1</h5>
      </div>
    );
  }
}

export default B1;
