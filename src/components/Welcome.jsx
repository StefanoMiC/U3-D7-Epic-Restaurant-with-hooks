// import { Component } from "react";

// REACT CLASS BASED COMPONENT (uses this for props and state)
// class Welcome extends Component {
//   // the render() method is the ONLY MANDATORY part of a class based component

//   render() {
//     console.log(this);
//     return (
// <>
//   <p>
//     Welcome!{" "}
//     {this.props.text}
//   </p>
//   <span>
//     this is useless
//   </span>
// </>
//     );
//   }
// }

// REACT FUNCTIONAL COMPONENT (no this keyword available)
const Welcome = ({ text }) => {
  console.log(this); //undefined
  return (
    <>
      <p>Welcome! {text}</p>
      <span>this is useless</span>
    </>
  );
};

export default Welcome;
