import React, { Component } from 'react';
import UserOutput from "./UserOutput.js"

class UserInput extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
    state = {
      value : "",
    }
    handleChange = () =>{
      this.setState(
      {  value : this.event }      ); 
       }

    handleSubmit(event) {
      <UserOutput name = {this.state.value}/>

    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text"  value={this.state.value}   onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}
 
export default UserInput;