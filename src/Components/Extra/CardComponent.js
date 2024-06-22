import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background: transparent;
  color: #000;
  border: 0.5px solid silver;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #7A0D91;
    border-color: #7A0D91;
  }
  // Center the button horizontally
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CardComponent({ title, text, date, icon, iconColor, buttonText, buttonIcon, onButtonClick }) {
  return (
    <Card className="mt-3">
      <Card.Body>
        <div className="d-flex">
          {React.cloneElement(icon, { style: { fontSize: '28px', marginRight: '5px', color: iconColor } })}
          <Card.Title className='h4 mb-0' style={{ fontSize: '19px', fontWeight: '600' }}>{title}</Card.Title>
        </div>
        <Card.Text className='cardText text-center'>
          {text}
        </Card.Text>
        <Card.Text className='cardText text-center'>
          {date}
        </Card.Text>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledButton variant="primary" onClick={onButtonClick}>
            {React.cloneElement(buttonIcon, { style: { fontSize: '19px', marginRight: '10px', textAlign: 'center' } })}
            {buttonText}
          </StyledButton>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
