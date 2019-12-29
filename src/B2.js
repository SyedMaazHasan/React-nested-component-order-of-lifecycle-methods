import React, { Component } from "react";

class B2 extends Component {
  componentWillMount() {
    console.log("component will mount in B2");
  }
  componentDidMount() {
    console.log("component did mount in B2");
  }
  shouldComponentUpdate() {
    // console.log("component should update in B2");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update in B2");
  }
  componentDidUpdate() {
    console.log("component did update in B2");
  }
  render() {
    return (
      <div>
        <h5>B2</h5>
      </div>
    );
  }
}

export default B2;
