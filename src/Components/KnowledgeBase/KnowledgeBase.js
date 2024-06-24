import React, { useState } from 'react';
import { Modal, Button, Dropdown, DropdownButton, Table, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LanguageIcon from '@mui/icons-material/Language';
import axios from 'axios';

const KnowledgeBase = () => {
    const [showFolderModal, setShowFolderModal] = useState(false);
    const [showFileModal, setShowFileModal] = useState(false);
    const [folderName, setFolderName] = useState('');
    const [folderDescription, setFolderDescription] = useState('');
    const [folderFiles, setFolderFiles] = useState([]);
    const [useAIMagic, setUseAIMagic] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadUrls, setUploadUrls] = useState(['']);

    const handleFolderModalClose = () => setShowFolderModal(false);
    const handleFolderModalShow = () => setShowFolderModal(true);
    const handleFileModalClose = () => setShowFileModal(false);
    const handleFileModalShow = () => setShowFileModal(true);

    const handleSaveFolder = async () => {
        const formData = new FormData();
        formData.append('folderName', folderName);
        formData.append('folderDescription', folderDescription);

        folderFiles.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });

        try {
            const response = await axios.post('https://voicing.ngrok.app/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error saving folder:', error);
        }

        setShowFolderModal(false);
    };

    const handleFolderFileChange = (event) => {
        alert("File")
        const files = Array.from(event.target.files);
        const validFiles = files.filter(file => file.type === 'application/pdf');
        if (validFiles.length !== files.length) {
            alert('Please upload only PDF files.');
        }
        setFolderFiles([...folderFiles, ...validFiles]);
    };

    const removeFolderFile = (index) => {
        const newFiles = [...folderFiles];
        newFiles.splice(index, 1);
        setFolderFiles(newFiles);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const validFiles = files.filter(file => file.type === 'application/pdf');
        if (validFiles.length !== files.length) {
            alert('Please upload only PDF files.');
        }
        setSelectedFiles([...selectedFiles, ...validFiles]);
    };

    const removeFile = (index) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
    };

    const handleUrlChange = (index, event) => {
        const newUrls = [...uploadUrls];
        newUrls[index] = event.target.value;
        setUploadUrls(newUrls);
    };

    const addUrlField = () => {
        setUploadUrls([...uploadUrls, '']);
    };

    const removeUrlField = (index) => {
        const newUrls = [...uploadUrls];
        newUrls.splice(index, 1);
        setUploadUrls(newUrls);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });

        uploadUrls.forEach((url, index) => {
            formData.append(`urls[${index}]`, url);
        });

        try {
            const response = await axios.post('https://voicing.ngrok.app/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const toggleAIMagic = () => {
        setUseAIMagic(!useAIMagic);
    };

    return (
        <Container className="mt-4 p-0">
            <Row className="mb-3">
                <Col className="d-flex justify-content-end">
                    <DropdownButton id="dropdown-basic-button" title="Add Document">
                        {/* <Dropdown.Item onClick={handleFolderModalShow}><CreateNewFolderIcon className='iconColor' /> Add Folder</Dropdown.Item> */}
                        <Dropdown.Item onClick={handleFileModalShow}><UploadFileIcon className='iconColor' /> Upload File sdasda</Dropdown.Item>
                        <Dropdown.Item href="#"><LanguageIcon className='iconColor' /> Connect Website</Dropdown.Item>
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
                        <Form.Group className="mb-3" controlId="formFolderFiles">
                            <Form.Label>Upload PDFs</Form.Label>
                            <Form.Control
                                type="file"
                                accept="application/pdf"
                                multiple
                                onChange={handleFolderFileChange}
                            />
                            <div>
                                {folderFiles.map((file, index) => (
                                    <div key={index} className="d-flex justify-content-between align-items-center mt-2">
                                        <span>{file.name}</span>
                                        <Button variant="danger" size="sm" onClick={() => removeFolderFile(index)}>Remove</Button>
                                    </div>
                                ))}
                            </div>
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
                        <Form.Label>Choose Files</Form.Label>
                        <div className="file-upload-wrapper">
                        <Form.Group className="mb-3" controlId="formFolderFiles">
                            <Form.Label>Upload PDFs</Form.Label>
                            <Form.Control
                                type="file"
                                accept="application/pdf"
                                multiple
                                onChange={handleFolderFileChange}
                            />
                            <div>
                                {folderFiles.map((file, index) => (
                                    <div key={index} className="d-flex justify-content-between align-items-center mt-2">
                                        <span>{file.name}</span>
                                        <Button variant="danger" size="sm" onClick={() => removeFolderFile(index)}>Remove</Button>
                                    </div>
                                ))}
                            </div>
                        </Form.Group>
                            <div className="file-upload-overlay">
                                <div className="file-upload-drag-text">
                                    Drag and drop files or click to browse.
                                </div>
                                <div className="file-upload-magic-toggle">
                                    <Form.Check
                                        type="switch"
                                        id="ai-magic-switch"
                                        label="Use AI magic to auto-format your files?"
                                        checked={useAIMagic}
                                        onChange={toggleAIMagic}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            {selectedFiles.map((file, index) => (
                                <div key={index} className="d-flex justify-content-between align-items-center mt-2">
                                    <span>{file.name}</span>
                                    <Button variant="danger" size="sm" onClick={() => removeFile(index)}>Remove</Button>
                                </div>
                            ))}
                        </div>
                    </Form.Group>
                    {uploadUrls.map((url, index) => (
                        <Form.Group key={index} className="mb-3" controlId={`formUrlUpload${index}`}>
                            <Form.Label>Enter URL</Form.Label>
                            <div className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter URL"
                                    value={url}
                                    onChange={(e) => handleUrlChange(index, e)}
                                />
                                <Button variant="danger" onClick={() => removeUrlField(index)}>Remove</Button>
                            </div>
                        </Form.Group>
                    ))}
                    <Button variant="link" onClick={addUrlField}>Add another URL</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btnClose' variant="secondary" onClick={handleFileUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default KnowledgeBase;
