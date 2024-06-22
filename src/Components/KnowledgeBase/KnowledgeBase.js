import React, { useState } from 'react';
import { Modal, Button, Dropdown, DropdownButton, Table, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LanguageIcon from '@mui/icons-material/Language';

const KnowledgeBase = () => {
    const [showFolderModal, setShowFolderModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [folderDescription, setFolderDescription] = useState('');
  const [useAIMagic, setUseAIMagic] = useState(false);

  const handleFolderModalClose = () => setShowFolderModal(false);
  const handleFolderModalShow = () => setShowFolderModal(true);
  const handleFileModalClose = () => setShowFileModal(false);
  const handleFileModalShow = () => setShowFileModal(true);

  const handleSaveFolder = () => {
    // Handle folder saving logic here
    console.log('Folder Name:', folderName);
    console.log('Folder Description:', folderDescription);
    setShowFolderModal(false);
  };

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    console.log('File:', event.target.files[0]);
    setShowFileModal(false);
  };

  const toggleAIMagic = () => {
    setUseAIMagic(!useAIMagic);
  };
  return (
    <Container className="mt-4 p-0">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <DropdownButton  id="dropdown-basic-button" title="Add Document">
            <Dropdown.Item onClick={handleFolderModalShow}><CreateNewFolderIcon className='iconColor' /> Add File</Dropdown.Item>
            <Dropdown.Item onClick={handleFileModalShow}><UploadFileIcon className='iconColor' />Upload File</Dropdown.Item>
            <Dropdown.Item href="#"><LanguageIcon className='iconColor' />Connect Website</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <Table bordered className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Last Updated At</th>
                  <th>Last Updated At</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="text-center">No results found</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Add Folder Modal */}
      <Modal show={showFolderModal} onHide={handleFolderModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFolderName">
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter folder name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFolderDescription">
              <Form.Label>Folder Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter folder description"
                value={folderDescription}
                onChange={(e) => setFolderDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
          <Button className='btnClose' variant="primary" onClick={handleSaveFolder}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Upload File Modal */}
      <Modal show={showFileModal} onHide={handleFileModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileUpload" className="mb-3">
            <Form.Label>Choose File</Form.Label>
            <div className="file-upload-wrapper">
              <Form.Control type="file" onChange={handleFileUpload} className="file-upload-input" />
              <div className="file-upload-overlay">
                <div className="file-upload-drag-text">
                  Drag and drop a file or click to browse.
                </div>
                <div className="file-upload-magic-toggle">
                  <Form.Check 
                    type="switch"
                    id="ai-magic-switch"
                    label="Use AI magic to auto-format your file?"
                    checked={useAIMagic}
                    onChange={toggleAIMagic}
                  />
                </div>
              </div>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btnClose' variant="secondary" onClick={handleFileModalClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default KnowledgeBase
