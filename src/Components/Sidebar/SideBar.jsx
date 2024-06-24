// import { NavLink } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import SidebarMenu from "./SidebarMenu";
// import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
// import GroupsIcon from '@mui/icons-material/Groups';
// import HomeIcon from '@mui/icons-material/Home';

// const routes = [
//   {
//     path: "/",
//     name: "Dashboard",
//     icon: <HomeIcon />,
//   },
//   {
//     path: "/agent",
//     name: "Agent",
//     icon: <GroupsIcon />,
//   },
//   {
//     path: "/callhistory",
//     name: "Call History",
//     icon: <FeaturedPlayListIcon />,
//   },
// ];

// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       opacity: 1,
//       width: "auto",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <div className="main-container">
//       <motion.div
//         animate={{
//           width: isOpen ? "200px" : "45px",
//           transition: {
//             duration: 0.5,
//             type: "spring",
//             damping: 10,
//           },
//         }}
//         className={`sidebar `}
//       >
//         <div className="top_section">
//           <div className="bars">
//             <FaBars onClick={toggle} />
//           </div>
//         </div>

//         <section className="routes">
//           {routes.map((route, index) => (
//             <NavLink
//               to={route.path}
//               key={index}
//               className="link"
//               activeclassname="active"
//             >
//               <div className="icon">{route.icon}</div>
//               <AnimatePresence>
//                 {isOpen && (
//                   <motion.div
//                     variants={showAnimation}
//                     initial="hidden"
//                     animate="show"
//                     exit="hidden"
//                     className="link_text"
//                   >
//                     {route.name}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </NavLink>
//           ))}
//         </section>
//       </motion.div>

//       <main>{children}</main>
//     </div>
//   );
// };

// export default SideBar;

import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaRobot } from "react-icons/fa"; // Import FaRobot icon
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/icons-material/Inbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import FoundationIcon from "@mui/icons-material/Foundation";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

const routes = [
  {
    name: "Agent Design",
    icon: <DesignServicesIcon />,
    subRoutes: [
      {
        path: "/",
        name: "Character Persona",
        icon: <CreateIcon />,
      },
      {
        path: "/customerdetails",
        name: "Customer Details",
        icon: <InfoIcon />,
      },
      {
        path: "/packagedetails",
        name: "Package Overview",
        icon: <Box />,
      },
      {
        path: "/targets",
        name: "Strategic Goals",
        icon: <CrisisAlertIcon />,
      },
    ],
  },
  {
    path: "/agent",
    name: "Agent",
    icon: <GroupsIcon />,
  },

  {
    path: "/knowledgebase",
    name: "Knowledge Base",
    icon: <FoundationIcon />,
  },

  {
    path: "/settings",
    name: "Settings",
    icon: <SettingsIcon />,
  },
  {
    path: "/mustread",
    name: "Must Read Instructions",
    icon: <ChromeReaderModeIcon />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/speech");
  };
  const [isAgentDesignOpen, setIsAgentDesignOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleAgentDesign = () => setIsAgentDesignOpen(!isAgentDesignOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuItemAnimation = {
    hidden: (i) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
    show: (i) => ({
      x: 0,
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
  };

  return (
    <MainContainer>
      <motion.div
        animate={{
          width: isOpen ? "215px" : "45px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar`}
      >
        <div className="top_section">
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <section className="routes">
          {routes.map((route, index) => (
            <div key={index}>
              {route.path ? (
                <NavLink
                  to={route.path}
                  className="link"
                  activeclassname="active"
                  onClick={() => setIsOpen(false)} // Close sidebar on click
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              ) : (
                <div className="menu" onClick={toggleAgentDesign}>
                  <div className="menu_item">
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {isOpen && (
                      <motion.div
                        animate={
                          isAgentDesignOpen
                            ? {
                                rotate: -90,
                              }
                            : { rotate: 0 }
                        }
                        className="expand_icon"
                      >
                        <ExpandMoreIcon />
                      </motion.div>
                    )}
                  </div>
                </div>
              )}
              {route.subRoutes && isAgentDesignOpen && isOpen && (
                <AnimatePresence>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="menu_container"
                  >
                    {route.subRoutes.map((subRoute, i) => (
                      <motion.div
                        variants={menuItemAnimation}
                        key={i}
                        custom={i}
                      >
                        <NavLink to={subRoute.path} className="link">
                          <div className="icon">{subRoute.icon}</div>
                          <motion.div className="link_text">
                            {subRoute.name}
                          </motion.div>
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </section>

        {/* Conditional rendering of button or icon */}
        {isOpen ? (
          <ButtonContainer>
            <div className="divider" />
            <button
              className="sidebar-button"
              style={{ backgroundColor: " #7A0D91" }}
              onClick={handleButtonClick}
            >
              Click To Call
            </button>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <div className="divider" />
            <FaRobot className="sidebar-icon" onClick={handleButtonClick} />
          </ButtonContainer>
        )}
      </motion.div>

      <main>{children}</main>
    </MainContainer>
  );
};

export default SideBar;

const MainContainer = styled.div`
  display: flex;
  background-color: #2e2e2e;
  .sidebar {
    background-color: #2e2e2e;
    color: #fff;
    padding-top: 20px;
  }
  .top_section {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
  .bars {
    cursor: pointer;
  }

  .link,
  .menu_item {
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    color: #fff;
    white-space: nowrap;
  }
  .link:hover,
  .menu_item:hover {
    background-color: #7a0d91;
  }
  .icon {
    margin-right: 10px;
  }
  .link_text {
    flex-grow: 1;
    text-align: left;
  }
  .active {
    background-color: #1e1e1e;
  }
  .expand_icon {
    // margin-left: auto;
    margin-left: 30px;
  }
  .menu_container {
    padding-left: 20px;
  }
  main {
    flex-grow: 1;
    padding: 20px;
    background-color: #f4f4f4;
  }
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  // padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  .divider {
    height: 10px;
  }

  .sidebar-button {
    background-color: #1e1e1e;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #333;
    }
  }

  .sidebar-icon {
    color: #fff;
    font-size: 24px;
    margin: 10px 0;
  }
`;
