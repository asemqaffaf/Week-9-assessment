import React,{Component} from 'react';
import UserOutput from "./UserOutput.js"
import UserInput from "./UserInput.js"
 
class App extends Component {
  // state = {
  //   items: [],
  //   isLoaded: false,
  // }
  
  render(){
 return (
   <div>
     <UserInput/>
     <UserOutput/>
     <UserOutput/>
     <UserOutput/>

   </div>
 )
  }

}
export default App;
