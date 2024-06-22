import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Extra/Header';

const Contain = styled.div`
  padding: 10px 50px 10px 30px;
`;

const EditButton = styled.button`
  background-color: ${(props) => (props.isEditing ? '#28a745' : '#7A0D91')};
  background: rgb(130,12,72);
  background: linear-gradient(90deg, rgba(130,12,72,1) 37%, rgba(180,10,158,1) 100%);
  color: white;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: -17px;
  margin-left: auto;
  &:hover {
    background-color: ${(props) => (props.isEditing ? '#218838' : '#7A0D91')};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const EditIndicator = styled.div`
  background: rgb(130,12,72);
  background: linear-gradient(90deg, rgba(130,12,72,1) 37%, rgba(180,10,158,1) 100%);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
`;

const TextareaContainer = styled.div`
  border: ${(props) => (props.isEditing ? '2px solid rgb(130,12,72)' : 'none')};
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  transition: border 0.3s;
`;

const Paragraph = styled.p`
  text-align: justify;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 250px; /* Set a fixed height */
  border: none;
  outline: none;
  resize: none;
  background: ${(props) => (props.isEditing ? 'transparent' : 'transparent')};
  margin-bottom: 10px;
  padding: 10px;
  transition: background 0.3s;
  &::placeholder {
    color: #888;
  }
`;

function EditableContent({ heading, initialContent }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleButtonClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setContent(Object.values(content).join('\n\n'));
    } else {
      const splitContent = content.split('\n\n');
      setContent({
        para1: splitContent[0] || '',
        para2: splitContent[1] || '',
        para3: splitContent[2] || '',
        para4: splitContent[3] || '',
        para5: splitContent[4] || ''
      });
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <Contain>
      <HeaderContainer>
        <Header heading={heading} />
        <EditButton onClick={handleButtonClick} isEditing={isEditing}>
          {isEditing ? "Save" : "Edit"}
        </EditButton>
      </HeaderContainer>
      {isEditing && <EditIndicator>Editing Mode</EditIndicator>}
      <TextareaContainer isEditing={isEditing}>
        {isEditing ? (
          <Textarea
            value={content}
            onChange={handleContentChange}
            isEditing={isEditing}
            rows={20}
          />
        ) : (
          <div style={{ textAlign: 'justify', fontSize: '14px' }}>
            <Paragraph>{content.para1}</Paragraph>
            <Paragraph>{content.para2}</Paragraph>
            <Paragraph>{content.para3}</Paragraph>
            <Paragraph>{content.para4}</Paragraph>
            <Paragraph>{content.para5}</Paragraph>
          </div>
        )}
      </TextareaContainer>
    </Contain>
  );
}

export default EditableContent;
