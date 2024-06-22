import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Extra/Header';
import InnerLayout from './InnerLayout';
import Showcase from './Showcase';
import QuickQuestions from './QuickQuestions';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import KnowledgeBase from './KnowledgeBase';
import axios from 'axios';

const Contain = styled.div`
  padding: 10px 10px 10px 10px;

  @media (min-width: 768px) {
    padding: 10px 30px 10px 30px;
  }
`;

const TabContent = styled(Box)`
  padding: 10px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <TabContent>{children}</TabContent>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DashboardMain() {
  const [value, setValue] = useState(0);
  const [clientInfo, setClientInfo] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchClientInfo = async () => {
    try {
      const response = await axios.get("https://voicing.ngrok.app/client-info/");
      setClientInfo(response.data.client_info);
    } catch (error) {
      console.error('Error fetching client info:', error);
    }
  };

  useEffect(() => {
    fetchClientInfo();
  }, []);

  return (
    <Contain>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Agent Design" {...a11yProps(0)} />
          <Tab label="Knowledge Base" {...a11yProps(1)} />
          <Tab label="Setting" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Header heading="Dashboard" />
        <div className="mb-4">
          <InnerLayout clientInfo={clientInfo}/>
        </div>
        <div className="mb-4">
          <QuickQuestions />
        </div>
        <Showcase fetchClientInfo={fetchClientInfo} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <KnowledgeBase />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Settings content can be added here */}
      </CustomTabPanel>
    </Contain>
  );
}
