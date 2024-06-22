// // import React, { useState } from "react";
// // import Container from 'react-bootstrap/Container';
// // // import Button from 'react-bootstrap/Button';
// // import Drawer from '@mui/material/Drawer';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import SpeechRecognitionComponent from '../Speech/SpeechRecognition';
// // import "./Navbar.css";
// // import { IconContext } from "react-icons";
// // import Image from "../Assets/voice.png";
// // import styled from "styled-components";

// // // Define the styled component outside of the functional component
// // const Logo = styled.img`
// //   height: 40px;
// //   margin-left: 10px;

// //   @media only screen and (max-width: 768px) {
// //     height: 50px;
// //     margin-left: 5px;
// //   }
// //   @media only screen and (max-width: 820px) {
// //     height: 50px;
// //     margin-left: 5px;
// //   }
// // `;

// // function Navbar() {
// //   const [sidebar, setSidebar] = useState(false);
// //   const [drawerOpen, setDrawerOpen] = useState(false);

// //   const showSidebar = () => setSidebar(!sidebar);
// //   const message = {
// //     marginRight: 20,
// //   };

// //   const toggleDrawer = (open) => () => {
// //     setDrawerOpen(open);
// //   };

// //   return (
// //     <>
// //       <IconContext.Provider value={{ color: "#f5f5f5" }}>
// //         <div className="navbar d-flex justify-content-between">
// //           <div>
// //             <Logo src={Image} alt="logo" className="img-fluid" />
// //           </div>
// //           <div className="d-flex">
// //             <div style={message}>
// //               <button onClick={toggleDrawer(true)} className="btn btn-primary" style={{ backgroundColor: "#7A0D91" }}> Click To Call</button>
// //             </div>
// //           </div>
// //         </div>
// //         {/* Drawer */}
// //         <Drawer
// //           anchor="right"
// //           open={drawerOpen}
// //           onClose={toggleDrawer(false)}
// //         >
// //           <Container style={{ width: '500px', padding: '20px' }}>
// //             <div className="d-flex justify-content-between align-items-center">
// //               <h5>Click To Call</h5>

// //               <IconButton onClick={toggleDrawer(false)}>
// //                 <CloseIcon />
// //               </IconButton>
// //             </div>
// //             <hr/>
// //             <SpeechRecognitionComponent />
// //             {/* <div className="d-flex justify-content-end mt-3">
// //               <Button className="btn btnClose" onClick={toggleDrawer(false)}>
// //                 Close
// //               </Button>
// //             </div> */}
// //           </Container>
// //         </Drawer>
// //         {/* End of Drawer */}
// //       </IconContext.Provider>
// //     </>
// //   );
// // }

// // export default Navbar;

// import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import SpeechRecognitionComponent from '../Speech/SpeechRecognition';
// import "./Navbar.css";
// import { IconContext } from "react-icons";
// import Image from "../Assets/voice.png";
// import styled from "styled-components";

// // Define the styled component outside of the functional component
// const Logo = styled.img`
//   height: 40px;
//   margin-left: 10px;

//   @media only screen and (max-width: 768px) {
//     height: 50px;
//     margin-left: 5px;
//   }
//   @media only screen and (max-width: 820px) {
//     height: 50px;
//     margin-left: 5px;
//   }
// `;

// function Navbar() {
//   const [sidebar, setSidebar] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);
//   const message = {
//     marginRight: 20,
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#f5f5f5" }}>
//         <div className="navbar d-flex justify-content-between align-items-center">
//           <div className="d-flex">
//             <Logo src={Image} alt="logo" className="img-fluid" />
//             <div className="d-flex" style={{height: "max-content", marginTop:"5px"}}>
//               <button className="btn btn-secondary me-2">Create</button>
//               <button className="btn btn-secondary me-2">Contact</button>
//               <button className="btn btn-secondary">Call History</button>
//             </div>
//           </div>
//           <div className="d-flex">
//             <div style={message}>
//               <button onClick={toggleDrawer(true)} className="btn btn-primary" style={{ backgroundColor: "#7A0D91" }}>Click To Call</button>
//             </div>

//           </div>
//         </div>
//         {/* Drawer */}
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <Container style={{ width: '500px', padding: '20px' }}>
//             <div className="d-flex justify-content-between align-items-center">
//               <h5>Click To Call</h5>
//               <IconButton onClick={toggleDrawer(false)}>
//                 <CloseIcon />
//               </IconButton>
//             </div>
//             <hr/>
//             <SpeechRecognitionComponent />
//           </Container>
//         </Drawer>
//         {/* End of Drawer */}
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import SpeechRecognitionComponent from '../Speech/SpeechRecognition';
// import "./Navbar.css";
// import { IconContext } from "react-icons";
// import Image from "../Assets/voice.png";
// import styled from "styled-components";
// import { Navbar, Nav, Button } from 'react-bootstrap';

// // Define the styled component outside of the functional component
// const Logo = styled.img`
//   height: 40px;
//   margin-left: 10px;

//   @media only screen and (max-width: 768px) {
//     height: 50px;
//     margin-left: 5px;
//   }
//   @media only screen and (max-width: 820px) {
//     height: 50px;
//     margin-left: 5px;
//   }
// `;

// function CustomNavbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#f5f5f5" }}>
//         <Navbar bg="dark" expand="lg" className="navbar-dark">
//           <Container fluid>
//             <Navbar.Brand href="#">
//               <Logo src={Image} alt="logo" />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarResponsive" />
//             <Navbar.Collapse id="navbarResponsive">
//               <Nav className="me-auto d-flex align-items-center">
//                 <Nav.Link href="#" className="btn btn-secondary me-2">Create</Nav.Link>
//                 <Nav.Link href="#" className="btn btn-secondary me-2">Contact</Nav.Link>
//                 <Nav.Link href="#" className="btn btn-secondary me-2">Call History</Nav.Link>
//               </Nav>
//               <Button
//                 onClick={toggleDrawer(true)}
//                 className="btn btn-primary"
//                 style={{ backgroundColor: "#7A0D91" }}
//               >
//                 Click To Call
//               </Button>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         {/* Drawer */}
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <Container style={{ width: '500px', padding: '20px' }}>
//             <div className="d-flex justify-content-between align-items-center">
//               <h5>Click To Call</h5>
//               <IconButton onClick={toggleDrawer(false)}>
//                 <CloseIcon />
//               </IconButton>
//             </div>
//             <hr/>
//             <SpeechRecognitionComponent />
//           </Container>
//         </Drawer>
//         {/* End of Drawer */}
//       </IconContext.Provider>
//     </>
//   );
// }

// export default CustomNavbar;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SpeechRecognitionComponent from "../Speech/SpeechRecognitions";
import { IconContext } from "react-icons";
import Image from "../Assets/voice.png";
import styled from "styled-components";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Define the styled component outside of the functional component
const Logo = styled.img`
  height: 40px;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
    height: 50px;
    margin-left: 5px;
  }
  @media only screen and (max-width: 820px) {
    height: 50px;
    margin-left: 5px;
  }
`;

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  padding: 10px 20px;
  z-index: 1000;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileDrawerContent = styled.div`
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavbarButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  background-color: #7a0d91;
  color: white;
  border: none;
  padding: 6px;
  font-size: smaller;
  margin-right: 10px;
  border-radius: 6px;
`;

function CustomNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleMobileDrawer = (open) => () => {
    setMobileDrawerOpen(open);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#f5f5f5" }}>
        <NavbarContainer>
          <NavbarContent>
            <NavbarLogo>
              <Logo src={Image} alt="logo" />
            </NavbarLogo>
            <NavbarButton>
              {/* <StyledButton onClick={toggleDrawer(true)}>Click To Call</StyledButton> */}
              {/* <AccountCircleIcon onClick={toggleDrawer(true)} style={{cursor: "pointer"}}/> */}
            </NavbarButton>
            <MobileMenuIcon>
              <IconButton onClick={toggleMobileDrawer(true)}>
                <MenuIcon style={{ color: "#7A0D91" }} />
              </IconButton>
              {/* <AccountCircleIcon onClick={toggleDrawer(true)} style={{cursor: "pointer"}}/> */}
            </MobileMenuIcon>
          </NavbarContent>
        </NavbarContainer>

        {/* Desktop Drawer */}
        {/* <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Container style={{ width: '500px', padding: '20px' }}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>Click To Call</h5>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <hr/>
            <SpeechRecognitionComponent />
          </Container>
        </Drawer> */}

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={mobileDrawerOpen}
          onClose={toggleMobileDrawer(false)}
        >
          <MobileDrawerContent>
            {/* <StyledButton>Create</StyledButton>
            <StyledButton>Contact</StyledButton>
            <StyledButton>Call History</StyledButton>
            <StyledButton onClick={toggleDrawer(true)}>Click To Call</StyledButton> */}
          </MobileDrawerContent>
        </Drawer>
      </IconContext.Provider>
    </>
  );
}

export default CustomNavbar;
