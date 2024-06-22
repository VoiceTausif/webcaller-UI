// import React, { useState } from 'react';
// import { Modal, Button, Dropdown, DropdownButton, Table, Container, Row, Col, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
// import LanguageIcon from '@mui/icons-material/Language';

// function KnowledgeBase() {
//   const [showFolderModal, setShowFolderModal] = useState(false);
//   const [showFileModal, setShowFileModal] = useState(false);
//   const [folderName, setFolderName] = useState('');
//   const [folderDescription, setFolderDescription] = useState('');
//   const [useAIMagic, setUseAIMagic] = useState(false);

//   const handleFolderModalClose = () => setShowFolderModal(false);
//   const handleFolderModalShow = () => setShowFolderModal(true);
//   const handleFileModalClose = () => setShowFileModal(false);
//   const handleFileModalShow = () => setShowFileModal(true);

//   const handleSaveFolder = () => {
//     // Handle folder saving logic here
//     console.log('Folder Name:', folderName);
//     console.log('Folder Description:', folderDescription);
//     setShowFolderModal(false);
//   };

//   const handleFileUpload = (event) => {
//     // Handle file upload logic here
//     console.log('File:', event.target.files[0]);
//     setShowFileModal(false);
//   };

//   const toggleAIMagic = () => {
//     setUseAIMagic(!useAIMagic);
//   };

//   return (
//     <Container className="mt-4 p-0">
//       <Row className="mb-3">
//         <Col className="d-flex justify-content-end">
//           <DropdownButton  id="dropdown-basic-button" title="Add Document">
//             <Dropdown.Item onClick={handleFolderModalShow}><CreateNewFolderIcon className='iconColor' /> Add Folder</Dropdown.Item>
//             <Dropdown.Item onClick={handleFileModalShow}><UploadFileIcon className='iconColor' />Upload File</Dropdown.Item>
//             <Dropdown.Item href="#"><LanguageIcon className='iconColor' />Connect Website</Dropdown.Item>
//           </DropdownButton>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <div className="table-responsive">
//             <Table bordered className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Status</th>
//                   <th>Last Updated At</th>
//                   <th>Last Updated At</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td colSpan="4" className="text-center">No results found</td>
//                 </tr>
//               </tbody>
//             </Table>
//           </div>
//         </Col>
//       </Row>

//       {/* Add Folder Modal */}
//       <Modal show={showFolderModal} onHide={handleFolderModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Folder</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="formFolderName">
//               <Form.Label>Folder Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter folder name"
//                 value={folderName}
//                 onChange={(e) => setFolderName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formFolderDescription">
//               <Form.Label>Folder Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter folder description"
//                 value={folderDescription}
//                 onChange={(e) => setFolderDescription(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>

//           <Button className='btnClose' variant="primary" onClick={handleSaveFolder}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Upload File Modal */}
//       <Modal show={showFileModal} onHide={handleFileModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload File</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="formFileUpload" className="mb-3">
//             <Form.Label>Choose File</Form.Label>
//             <div className="file-upload-wrapper">
//               <Form.Control type="file" onChange={handleFileUpload} className="file-upload-input" />
//               <div className="file-upload-overlay">
//                 <div className="file-upload-drag-text">
//                   Drag and drop a file or click to browse.
//                 </div>
//                 <div className="file-upload-magic-toggle">
//                   <Form.Check 
//                     type="switch"
//                     id="ai-magic-switch"
//                     label="Use AI magic to auto-format your file?"
//                     checked={useAIMagic}
//                     onChange={toggleAIMagic}
//                   />
//                 </div>
//               </div>
//             </div>
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button className='btnClose' variant="secondary" onClick={handleFileModalClose}>
//             Upload
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }

// export default KnowledgeBase;


import React, { useState } from 'react';
import { Modal, Button, Dropdown, DropdownButton, Table, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LanguageIcon from '@mui/icons-material/Language';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function KnowledgeBase() {
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const [showWebsiteModal, setShowWebsiteModal] = useState(false); // State for "Connect Website" modal
  const [folderName, setFolderName] = useState('');
  const [folderDescription, setFolderDescription] = useState('');
  const [useAIMagic, setUseAIMagic] = useState(false);
  const [webpageURLs, setWebpageURLs] = useState(['']); // State for storing webpage URLs

  const handleFolderModalClose = () => setShowFolderModal(false);
  const handleFolderModalShow = () => setShowFolderModal(true);
  const handleFileModalClose = () => setShowFileModal(false);
  const handleFileModalShow = () => setShowFileModal(true);
  const handleWebsiteModalClose = () => {
    setShowWebsiteModal(false);
    setWebpageURLs(['']); // Reset webpage URLs state when modal closes
  };
  const handleWebsiteModalShow = () => setShowWebsiteModal(true);

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

  const handleAddWebpageURL = () => {
    setWebpageURLs([...webpageURLs, '']);
  };

  const handleRemoveWebpageURL = (index) => {
    const updatedURLs = [...webpageURLs];
    updatedURLs.splice(index, 1);
    setWebpageURLs(updatedURLs);
  };

  const handleWebpageURLChange = (index, value) => {
    const updatedURLs = [...webpageURLs];
    updatedURLs[index] = value;
    setWebpageURLs(updatedURLs);
  };

  return (
    <Container className="mt-4 p-0">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <DropdownButton id="dropdown-basic-button" title="Add Document">
            <Dropdown.Item onClick={handleFolderModalShow}><CreateNewFolderIcon className='iconColor' /> Add Folder</Dropdown.Item>
            <Dropdown.Item onClick={handleFileModalShow}><UploadFileIcon className='iconColor' /> Upload File</Dropdown.Item>
            <Dropdown.Item onClick={handleWebsiteModalShow}><LanguageIcon className='iconColor' /> Connect Website</Dropdown.Item>
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
      <Modal show={showFolderModal} onHide={handleFolderModalClose} dialogClassName="modal-lg">
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
      <Modal show={showFileModal} onHide={handleFileModalClose} dialogClassName="modal-lg">
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

      {/* Connect Website Modal */}
      <Modal show={showWebsiteModal} onHide={handleWebsiteModalClose} dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Connect Webpage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
            <div className='conectWebpage'>
              <Form.Text style={{color: "#fff"}}>
                Only publicly available knowledge bases will be imported. If your knowledge base is not publicly available, please import as documents instead.
              </Form.Text>
            </div>
            {webpageURLs.map((url, index) => (
              <InputGroup className="mb-3 " key={index}>
                <Form.Control
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => handleWebpageURLChange(index, e.target.value)}
                />
                {webpageURLs.length > 1 && (
                  <Button variant="outline-secondary"  onClick={() => handleRemoveWebpageURL(index)}><DeleteIcon className='deleteUrl' /></Button>
                )}
              </InputGroup>
            ))}
            <Button variant="outline-secondary" className='addUrl' onClick={handleAddWebpageURL}><AddIcon /> Add URL</Button>

            <Form.Group controlId="formCheckbox" className='boxCheck'>
              <Form.Check type="checkbox" label="By checking this box, you authorize Phonely to transfer Customer Data on your behalf from the URL provided, and you represent and warrant that you have all rights and permissions necessary for Phonely to scrape the data from the above webpages and subpages." />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" style={{background: "linear-gradient(90deg, rgba(130,12,72,1) 37%, rgba(180,10,158,1) 100%)"}} onClick={handleWebsiteModalClose}>
            Import
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default KnowledgeBase;

