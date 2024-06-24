// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Header from '../Extra/Header';

// const Contain = styled.div`
//   padding: 10px 50px 10px 30px;
// `;

// const EditButton = styled.button`
//   background-color: ${(props) => (props.isEditing ? '#28a745' : '#7A0D91')};
//   background: rgb(130,12,72);
//   background: linear-gradient(90deg, rgba(130,12,72,1) 37%, rgba(180,10,158,1) 100%);
//   color: white;
//   border: none;
//   padding: 5px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 14px;
//   margin-top: -17px;
//   margin-left: auto;
//   &:hover {
//     background-color: ${(props) => (props.isEditing ? '#218838' : '#7A0D91')};
//   }
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const EditIndicator = styled.div`
//   background: rgb(130,12,72);
//   background: linear-gradient(90deg, rgba(130,12,72,1) 37%, rgba(180,10,158,1) 100%);
//   color: #fff;
//   padding: 5px 10px;
//   border-radius: 5px;
//   margin-bottom: 15px;
//   font-weight: bold;
//   text-align: center;
// `;

// const TextareaContainer = styled.div`
//   border: ${(props) => (props.isEditing ? '2px solid rgb(130,12,72)' : 'none')};
//   padding: 10px;
//   border-radius: 5px;
//   background: #fff;
//   transition: border 0.3s;
// `;

// const Paragraph = styled.p`
//   text-align: justify;
//   font-size: 14px;
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   height: 250px;
//   border: none;
//   outline: none;
//   resize: none;
//   background: ${(props) => (props.isEditing ? 'transparent' : 'transparent')};
//   margin-bottom: 10px;
//   padding: 10px;
//   transition: background 0.3s;
//   &::placeholder {
//     color: #888;
//   }
// `;

// const API_ENDPOINTS = {
//   AgentMain: { url: 'https://voicing.ngrok.app/update-agent-persona/', key: 'persona' },
//   ClientInformation: { url: 'https://voicing.ngrok.app/update-client-info/', key: 'client_info' },
//   PackageDetails: { url: 'https://voicing.ngrok.app/update-package-features/', key: 'features' },
//   TargetsBiz: { url: 'https://voicing.ngrok.app/update-business-target/', key: 'target' },
// };

// function EditableContent({ heading, initialContent, page , refreshContent }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [content, setContent] = useState(initialContent);

//   const handleButtonClick = async () => {
//     if (isEditing) {
//       try {
//         if (!API_ENDPOINTS[page]) {
//           throw new Error('Invalid page provided');
//         }

//         const { url, key } = API_ENDPOINTS[page];
//         const formData = new FormData();
//         formData.append(key, content);

//         const response = await axios.post(url, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         await refreshContent()
//         setContent(response.data.content);
        
//         setIsEditing(false); // Exit editing mode after successful save
//       } catch (error) {
//         console.error('Error saving content:', error);
//       }
//     } else {
//       setIsEditing(true); // Enter editing mode
//     }
//   };

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   return (
//     <Contain>
//       <HeaderContainer>
//         <Header heading={heading} />
//         <EditButton onClick={handleButtonClick} isEditing={isEditing}>
//           {isEditing ? "Save" : "Edit"}
//         </EditButton>
//       </HeaderContainer>
//       {isEditing && <EditIndicator>Editing Mode</EditIndicator>}
//       <TextareaContainer isEditing={isEditing}>
//         {isEditing ? (
//           <Textarea
//             value={content}
//             onChange={handleContentChange}
//             isEditing={isEditing}
//             rows={20}
//           />
//         ) : (
//           <div style={{ textAlign: 'justify', fontSize: '14px' }}>
//             {initialContent.split('\n').map((para, idx) => (
//               <Paragraph key={idx}>{para}</Paragraph>
//             ))}
//           </div>
//         )}
//       </TextareaContainer>
//     </Contain>
//   );
// }

// export default EditableContent;
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../Extra/Header';
import EditIcon from '@mui/icons-material/Edit'; // Import Edit icon from Material-UI
import SaveIcon from '@mui/icons-material/Save'; // Import Save icon from Material-UI
import CancelIcon from '@mui/icons-material/Cancel'; // Import Cancel icon from Material-UI

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
  display: flex;
  align-items: center; /* Align icon and text vertically */
  gap: 5px; /* Space between icon and text */
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
  position: relative; /* Position relative for absolute positioning */
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
  height: 250px;
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

const CancelButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: #c82333;
  }
`;

const API_ENDPOINTS = {
  AgentMain: { url: 'https://voicing.ngrok.app/update-agent-persona/', key: 'persona' },
  ClientInformation: { url: 'https://voicing.ngrok.app/update-client-info/', key: 'client_info' },
  PackageDetails: { url: 'https://voicing.ngrok.app/update-package-features/', key: 'features' },
  TargetsBiz: { url: 'https://voicing.ngrok.app/update-business-target/', key: 'target' },
};

function EditableContent({ heading, initialContent, page, refreshContent }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleButtonClick = async () => {
    if (isEditing) {
      try {
        if (!API_ENDPOINTS[page]) {
          throw new Error('Invalid page provided');
        }

        const { url, key } = API_ENDPOINTS[page];
        const formData = new FormData();
        formData.append(key, content);

        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        await refreshContent();
        setContent(response.data.content);

        setIsEditing(false); // Exit editing mode after successful save
      } catch (error) {
        console.error('Error saving content:', error);
      }
    } else {
      setIsEditing(true); // Enter editing mode
    }
  };

  const handleCancelClick = () => {
    setContent(initialContent); // Reset content to initial state
    setIsEditing(false); // Exit editing mode
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <Contain>
      <HeaderContainer>
        <Header heading={heading} />
        <EditButton onClick={handleButtonClick} isEditing={isEditing}>
          {isEditing ? <SaveIcon /> : <EditIcon />} {/* Display Save or Edit icon based on editing mode */}
          {isEditing ? 'Save' : 'Edit'}
        </EditButton>
      </HeaderContainer>
      {isEditing && <EditIndicator>Editing Mode</EditIndicator>}
      <TextareaContainer isEditing={isEditing}>
        {isEditing ? (
          <>
            <Textarea value={content} onChange={handleContentChange} isEditing={isEditing} rows={20} />
            <CancelButton onClick={handleCancelClick}>
              <CancelIcon /> {/* Display Cancel icon */}
              Cancel
            </CancelButton>
          </>
        ) : (
          <div style={{ textAlign: 'justify', fontSize: '14px' }}>
            {initialContent.split('\n').map((para, idx) => (
              <Paragraph key={idx}>{para}</Paragraph>
            ))}
          </div>
        )}
      </TextareaContainer>
    </Contain>
  );
}

export default EditableContent;
