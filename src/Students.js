import React, { Component } from "react";

class Students extends Component {
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.bio}
        </p>
        
      </>
    );
  }
}

export default Students
