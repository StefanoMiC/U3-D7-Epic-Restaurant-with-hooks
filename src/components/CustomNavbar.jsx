import { Navbar, Nav } from "react-bootstrap";

// EXPLICIT RETURN FROM FUNCTIONAL COMPONENTS
// const CustomNavbar = props => {
//     return (
//       <Navbar
//         bg="light"
//         expand="lg"
//       >
//         <Navbar.Brand href="#home">
//           {props.title}
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">
//               Home
//             </Nav.Link>
//             <Nav.Link href="#link">
//               Link
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   };

// IMPLICIT RETURN
const CustomNavbar = ({ title }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
