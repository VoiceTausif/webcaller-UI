import React, {useState , useEffect} from 'react';
import EditableContent from './EditableContent';
import axios from 'axios';
function PackageDetails() {

  const [features, setfeatures]  = useState("")

  const fetchfeatures = async () => {
    try {
      const response = await axios.get("https://voicing.ngrok.app/get-package-features/");
              setfeatures(response.data.content);
    } catch (error) {
      console.error('Error fetching client info:', error);
    }
  };

  useEffect(()=>{
    fetchfeatures()
  },[])

  return (
    <EditableContent heading="Package Overview" initialContent={features} page="PackageDetails" refreshContent={fetchfeatures}/>
  );
}

export default PackageDetails;
