import React from "react"
// Conditional Rendering: I am going to load something on the screen if the prop is true
function Conditional(props){
//  ternary operator: commonly used, provide a condition ? if true : statment if false  
//    if(props.isLoading === true) {  <====code we started this practice with
    return (
        <div>
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional
            rendering</h1>}
        </div>
    )
/// Above is a clean code example of conditional rendering....dont forget: {}...will throw an error related to true ?
// From Render in APP.js: when Conditional runs and is true, Loading is rendered...from the Parent JSX Component
//  When the Parent Component changes to false the code below renders to the screen   
    
/// return statement above is usually put in render() function because App should be in charge of the final render
/// of page..see comments for code
/// Code here if App comment was uncommented : function Conditional(props) {       
//                                                 return <h1>Some cool stuff about conditional rendering</h1>
//                                             }
// else block but not needed because of return below, can be used but this is a cleaner, neater way to do the same process   
    return (
        <h1>Some cool stuff about conditional rendering</h1>
        )
   
}
export default Conditional