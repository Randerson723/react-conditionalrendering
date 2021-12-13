import React, {Component} from "react"
import Conditional from "./Conditional"

// Class
class App extends Component {
  constructor() {
    super()
    this.state = {
      isloading: true
    }
  }
///Method  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isloading: false
// isLoading is the prop      
/// Component is set up to run isLoading: true, then wait 1.5 seconds(1500)  and then refresh to isLoading: false
      })
    }, 1500)
  }


/// Render to page
  render() {
    return (
      <div>
         <Conditional isloading={this.state.isloading}/>
      </div>
    )
///  Changed cleaner code as follows....commented code on Conditional should be used with this code
///    <div>
///       {this.state.isLoading ?
///       <h1>Loading..</h1> :
///       <Conditional />
///     </div>
  }
}
export default App;
// There are other ways to use these Methods, this is just one example