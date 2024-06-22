import React, { useState } from "react";
import styled from 'styled-components'
// import Header from '../Extra/Header'
import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Contain = styled.div` 
   ${'' /* padding: 10px 50px 10px 30px; */}
   background-color: #fff;
    border-radius: 3px;
    padding:20px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`
const InnerCard = styled.div`
  
`
const Heading = styled.h4`
  
`
const Text = styled.p`
  
`

const QuickQuestions = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Contain>
            <InnerCard>
                <Heading className="greating">
                    Quick Questions
                </Heading>
                <Text className="greetCustomer">
                    Voicing.ai tracks what it doesn't know, and puts that info here.
                </Text>
                <div className='row m-0'>
                    <div className='col-md-10 inputTextField' onClick={handleShow} style={{ cursor: 'pointer' }}>
                        <AddCircleOutlineIcon style={{ fontSize: '25px', marginRight: '10px' }} />
                    </div>
                </div>

            </InnerCard>

            <div>
                {/* Modal */}
                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header className="quickModal" style={{  color: '#fff' }} closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" >
                            <Heading>Add FAQ</Heading>
                            <Text className="aiAgent" style={{ fontSize: "12px" }}>Don't worry, you can always change the info later.</Text>
                        </Modal.Title>
                    </Modal.Header>
                    <Container>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Please enter your question"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Answer</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="please enter an answer" />
                            </Form.Group>
                        </Form>

                        <Modal.Footer>
              <Button className="btn btnClose" onClick={handleClose}>
               Save
              </Button>
            </Modal.Footer>
                    </Container>
                </Modal>
                {/* End of Modal */}
            </div>

        </Contain>
    )
}

export default QuickQuestions
