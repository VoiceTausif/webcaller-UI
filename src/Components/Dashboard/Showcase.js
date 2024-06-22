import React, { useState } from 'react';
import styled from 'styled-components';
import CardComponent from '../Extra/CardComponent';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const Contain = styled.div`
   background-color: #fff;
   border-radius: 3px;
   padding: 20px;
   box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const InnerCard = styled.div``;
const Heading = styled.h4``;
const Text = styled.p``;

const Showcase = ({ fetchClientInfo }) => {
  const [showModal, setShowModal] = useState(false);
  const [clientPersona, setClientPersona] = useState('');
  const [agentPersona, setAgentPersona] = useState('');
  const [packageFeatures, setPackageFeatures] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFirstCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  const handleSave = async () => {
    const content = `${agentPersona}\n\nClient Information\n${clientPersona}\n\nPackage Features\n${packageFeatures}`;

    if (countWords(content) > 700) {
      setErrorMessage('The content exceeds the 700-word limit. Please shorten the text.');
      return;
    }

    // Create a Blob from the content
    const file = new Blob([content], { type: 'text/plain' });

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append('file', file, 'AgentDetails.txt');

    try {
      // Upload the file to the specified endpoint
      const response = await axios.post('https://voicing.ngrok.app/upload-prompt/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      console.log('File uploaded successfully');

      // Reset the state values
      setClientPersona('');
      setAgentPersona('');
      setPackageFeatures('');

      // Fetch the updated client information
      fetchClientInfo();

      handleCloseModal(); // Close the modal after successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
      console.log('Failed to upload file');
    }
  };

  return (
    <Contain>
      <InnerCard>
        <Heading className='agentContext'>
          Give your agent context...
        </Heading>
        <Text className='contextParagrph'>
          What information should your agent have when answering the phone?
        </Text>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
              <CardComponent
                title="Agent Instructions"
                text="Showcase your business background, history, and mission."
                icon={<CorporateFareIcon />}
                iconColor="#7A0D91"
                buttonText="Add Info"
                buttonIcon={<AddCircleOutlineIcon />}
                onButtonClick={handleFirstCardClick}
              />
            </div>

            {/* 3rd Card */}
            {/* <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
              <CardComponent
                title="Scripts"
                text="Add scripts for the AI agent to use in conversations."
                date="Jun 12, 2024, 5:30:00 PM"
                icon={<ReceiptLongIcon />}
                iconColor="#dc3545"
                buttonText="Add Info"
                buttonIcon={<AddCircleOutlineIcon />}
              />
            </div> */}

            {/* 4th Card */}
            {/* <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
              <CardComponent
                title="Scripts"
                text="Add scripts for the AI agent to use in conversations."
                date="Jun 12, 2024, 5:30:00 PM"
                icon={<ReceiptLongIcon />}
                iconColor="#dc3545"
                buttonText="Add Info"
                buttonIcon={<AddCircleOutlineIcon />}
              />
            </div> */}
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: '20px' }}>Agent Instruction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form>
              <Form.Group controlId="formAgentPersona">
                <Form.Label style={{ fontSize: '13px' }}>Agent Persona and Targets</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={agentPersona}
                  onChange={(e) => setAgentPersona(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formClientPersona">
                <Form.Label style={{ fontSize: '13px' }}>Client Information</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={clientPersona}
                  onChange={(e) => setClientPersona(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPackageFeatures" className="mt-3">
                <Form.Label style={{ fontSize: '13px' }}>Package Features</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={packageFeatures}
                  onChange={(e) => setPackageFeatures(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary btnClose" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </InnerCard>
    </Contain>
  );
};

export default Showcase;
