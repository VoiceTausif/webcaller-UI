import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  
  useEffect(() => {
    // Fetch the list of agents from your API
    axios.get('https://api.example.com/agents')
      .then(response => {
        setAgents(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the agents!", error);
      });
  }, []);
  
  const handleSelectAgent = (agentId) => {
    // API call to select the agent
    axios.post(`https://api.example.com/select-agent`, { id: agentId })
      .then(response => {
        console.log("Agent selected successfully!", response.data);
      })
      .catch(error => {
        console.error("There was an error selecting the agent!", error);
      });
  };
  
  return (
    <div>
      <h1>Agent List</h1>
      <Container>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Container>
    </div>
  );
};

export default Agents;
