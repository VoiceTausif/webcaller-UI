import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink  // Import NavLink for active link styling
} from "react-router-dom";
import SideBar from "./Components/Sidebar/SideBar"
import Navbar from './Components/Navbar/Navbar';
import DashboardMain from './Components/Dashboard/DashboardMain';
import AgentMain from './Components/Agent/AgentMain';
import CallHistoryMain from './Components/CallHistory/CallHistoryMain';
import ClientInformation from './Components/Agent/ClientInformation';
import KnowledgeBase from './Components/Dashboard/KnowledgeBase';
import PackageDetails from './Components/Agent/PackageDetails';
import TargetsBiz from './Components/Agent/TargetsBiz';
import Agents from './Components/Agent/Agents';
import SpeechRecognitionComponent from './Components/Speech/SpeechRecognitions';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SideBar>
          <Routes>
            <Route path="/" element={<AgentMain />} />
            <Route path="/clientinfo" element={<ClientInformation />} />
            <Route path="/packagedetails" element={<PackageDetails />} />
            <Route path="/dashboard" element={<DashboardMain />} />
            <Route path="/callhistory" element={<CallHistoryMain />} /> 
            <Route path='/targets' element={<TargetsBiz/>}/>
            <Route path='/knowledgebase' element={<KnowledgeBase/>} />   
            <Route path='/agent' element={<Agents/>}/>         
            <Route path='/speech' element={<SpeechRecognitionComponent/>}/>
            <Route path="*" element={<div>Not found</div>} /> 
          </Routes>
        </SideBar>
      </Router>
    </>
  );
}

export default App;
