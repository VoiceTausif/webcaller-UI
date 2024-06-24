import React, { useEffect, useState } from 'react';
import EditableContent from './EditableContent';
import axios from 'axios';

function AgentMain() {
  const [agent , setAgent] = useState('');

  const agentData = async () => {
    try {
      let agentData = await axios.get('https://voicing.ngrok.app/get-agent-persona/');
      setAgent(agentData.data.content)
    } catch (error) {
      console.error('Error fetching client info:', error);
    } 
  }

  useEffect(()=>{
    agentData()
  },[]);

  return (
    <EditableContent heading="Character Persona Manager" initialContent={agent} page="AgentMain" refreshContent={agentData}  />
  );
}

export default AgentMain;
