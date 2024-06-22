import React, { useState } from "react";
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

const Contain = styled.div`
   background-color: #fff;
    border-radius: 3px;
    padding:20px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const InnerCard = styled.div``;
const Heading = styled.h4``;
const Text = styled.p``;

function InnerLayout({ clientInfo }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Contain>
      <InnerCard>
        <Heading className="greating">
          Client Information
        </Heading>
        
        <div className='row m-0'>
          <div className='col-md-10 inputTextField'>
            {clientInfo?.split('\n').map((line, index) => (
              <Text className="greetCustomer" key={index}>
                {line}
              </Text>
            ))}
          </div>
        </div>
      </InnerCard>
      <div>
        <Modal show={show} onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header style={{ backgroundColor: "crimson", color: '#fff' }} closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <Heading>Select a voice</Heading>
              <Text className="aiAgent" style={{ fontSize: "12px" }}>Select a voice for your AI agent</Text>
            </Modal.Title>
          </Modal.Header>
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
        </Modal>
      </div>
    </Contain>
  );
}

export default InnerLayout;
