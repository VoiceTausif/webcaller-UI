import React, { useState } from 'react';
import EditableContent from './EditableContent';
import axios from 'axios';
import { useEffect } from 'react';

function TargetsBiz() {
  const [target , setTarget] = useState('')

  const fetchTarget = async () => {
    try{
    const response = await axios.get('https://voicing.ngrok.app/get-business-target/');
    setTarget(response.data.content)
    }
    catch (error){
      console.error('Error fetching client info:', error);

    }
  } 

  useEffect(()=>{
    fetchTarget()
  },[])
  


  return (
    <EditableContent heading="Strategic Goals/Outcomes" initialContent={target}  page="TargetsBiz" refreshContent={fetchTarget}/>
  );
}

export default TargetsBiz;
