import React, { useState, useEffect } from 'react';
import EditableContent from './EditableContent';
import axios from 'axios';

function ClientInformation() {

  const [clientInfo, setClientInfo]  = useState("")

  const fetchClientInfo = async () => {
    try {
      const response = await axios.get("https://voicing.ngrok.app/get-client-info/");
      setClientInfo(response.data.content);
    } catch (error) {
      console.error('Error fetching client info:', error);
    }
  };

  useEffect(() => {
    fetchClientInfo();
  }, []);

  return (
    <EditableContent heading="Customer Details" initialContent={clientInfo} page="ClientInformation" refreshContent={fetchClientInfo} />
  );
}

export default ClientInformation;
