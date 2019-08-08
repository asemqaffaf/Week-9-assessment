import React, { Component } from 'react';
import "./output.css"

class UserOutput extends Component {
    state = {

      }

    render() { 
        return ( 
            <div className="name" >
                {this.props.name.value}<br/>
                i hope i'll be overwritten!
            </div>
         );
    }
}
 
export default UserOutput;