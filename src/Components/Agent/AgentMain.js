// import React from 'react'
// import styled from 'styled-components'
// // import InnerLayout from '../Dashboard/InnerLayout'
// // import Showcase from '../Dashboard/Showcase'
// import Header from '../Extra/Header'

// const Contain = styled.div` 
//    padding: 10px 50px 10px 30px;


// `

// function AgentMain() {
//   return (
//     <Contain>
//       <Header
//         heading="Agent Persona"
//       />
//       <div className='mb-4 agentPersona'>
//         <div style={{textAlign: "justify", fontSize: "14px"}}>
//           <p>
//             Chris Haroun, an esteemed entrepreneur, educator, and author, founded The Haroun MBA Degree
//             Program® with a mission to empower aspiring business professionals worldwide. With over 1.5 million online
//             courses sold globally and a rich background at prestigious institutions like Goldman Sachs and Columbia
//             University, Chris brings a wealth of real-world experience to his teachings.
//           </p>
//           <p>
//             Chris's warm and engaging demeanor, combined with his practical insights, makes complex business
//             concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all
//             problems, infuses his teaching style with high energy and enthusiasm.
//           </p>

//           <p>
//             Chris's warm and engaging demeanor, combined with his practical insights, makes complex business
//             concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all
//             problems, infuses his teaching style with high energy and enthusiasm.
//           </p>
//           <p>
//             He fosters a supportive learning environment, ensuring students' success through direct yet empathetic
//             communication. Chris's credibility is underscored by his recognition in top business publications and guest
//             lectures at esteemed institutions like Berkeley and Stanford.
//           </p>
//           <p>
//             Join Chris's courses on Udemy to experience personalized mentorship, practical benefits, and a supportive
//             community that empowers you to achieve your highest potential in the business world.
//           </p>
//         </div>

//       </div>

//     </Contain>
//   )
// }

// export default AgentMain


// import React from 'react';
// import styled from 'styled-components';
// // import InnerLayout from '../Dashboard/InnerLayout'
// // import Showcase from '../Dashboard/Showcase'
// import Header from '../Extra/Header';

// const Contain = styled.div`
//   padding: 10px 50px 10px 30px;
// `;

// const EditButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 14px;
//   margin-top: -13px;
//   margin-left: auto;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// function AgentMain() {
//   return (
//     <Contain>
//       <HeaderContainer>
//         <Header heading="Agent Persona" />
//         <EditButton>Edit</EditButton>
//       </HeaderContainer>
//       <div className='mb-4 agentPersona'>
//         <div style={{ textAlign: 'justify', fontSize: '14px' }}>
//           <p>
//             Chris Haroun, an esteemed entrepreneur, educator, and author, founded The Haroun MBA Degree
//             Program® with a mission to empower aspiring business professionals worldwide. With over 1.5 million online
//             courses sold globally and a rich background at prestigious institutions like Goldman Sachs and Columbia
//             University, Chris brings a wealth of real-world experience to his teachings.
//           </p>
//           <p>
//             Chris's warm and engaging demeanor, combined with his practical insights, makes complex business
//             concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all
//             problems, infuses his teaching style with high energy and enthusiasm.
//           </p>

//           <p>
//             Chris's warm and engaging demeanor, combined with his practical insights, makes complex business
//             concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all
//             problems, infuses his teaching style with high energy and enthusiasm.
//           </p>
//           <p>
//             He fosters a supportive learning environment, ensuring students' success through direct yet empathetic
//             communication. Chris's credibility is underscored by his recognition in top business publications and guest
//             lectures at esteemed institutions like Berkeley and Stanford.
//           </p>
//           <p>
//             Join Chris's courses on Udemy to experience personalized mentorship, practical benefits, and a supportive
//             community that empowers you to achieve your highest potential in the business world.
//           </p>
//         </div>
//       </div>
//     </Contain>
//   );
// }

// export default AgentMain;

// import React, { useState } from 'react';
// import styled from 'styled-components';
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
//     background-color: ${(props) => (props.isEditing ? '#218838': '#7A0D91')};
//   }
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const EditIndicator = styled.div`
//    background: rgb(130,12,72);
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
//   border: none;
//   outline: none;
//   resize: none;
//   background: ${(props) => (props.isEditing ? '#fffbe6' : 'transparent')};
//   margin-bottom: 10px;
//   padding: 5px;
//   transition: background 0.3s;
// `;

// function AgentMain() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [content, setContent] = useState({
//     para1: "Chris Haroun, an esteemed entrepreneur, educator, and author, founded The Haroun MBA Degree Program® with a mission to empower aspiring business professionals worldwide. With over 1.5 million online courses sold globally and a rich background at prestigious institutions like Goldman Sachs and Columbia University, Chris brings a wealth of real-world experience to his teachings.",
//     para2: "Chris's warm and engaging demeanor, combined with his practical insights, makes complex business concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all problems, infuses his teaching style with high energy and enthusiasm.",
//     para3: "Chris's warm and engaging demeanor, combined with his practical insights, makes complex business concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all problems, infuses his teaching style with high energy and enthusiasm.",
//     para4: "He fosters a supportive learning environment, ensuring students' success through direct yet empathetic communication. Chris's credibility is underscored by his recognition in top business publications and guest lectures at esteemed institutions like Berkeley and Stanford.",
//     para5: "Join Chris's courses on Udemy to experience personalized mentorship, practical benefits, and a supportive community that empowers you to achieve your highest potential in the business world."
//   });

//   const handleButtonClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleContentChange = (e) => {
//     const { name, value } = e.target;
//     setContent({
//       ...content,
//       [name]: value
//     });
//   };

//   return (
//     <Contain>
//       <HeaderContainer>
//         <Header heading="Agent Persona" />
//         <EditButton onClick={handleButtonClick} isEditing={isEditing}>
//           {isEditing ? "Save" : "Edit"}
//         </EditButton>
//       </HeaderContainer>
//       {isEditing && <EditIndicator>Editing Mode</EditIndicator>}
//       <TextareaContainer isEditing={isEditing}>
//         <div style={{ textAlign: 'justify', fontSize: '14px' }}>
//           {isEditing ? (
//             <>
//               <Textarea
//                 name="para1"
//                 value={content.para1}
//                 onChange={handleContentChange}
//                 isEditing={isEditing}
//                 rows={5}
//               />
//               <Textarea
//                 name="para2"
//                 value={content.para2}
//                 onChange={handleContentChange}
//                 isEditing={isEditing}
//                 rows={4}
//               />
//               <Textarea
//                 name="para3"
//                 value={content.para3}
//                 onChange={handleContentChange}
//                 isEditing={isEditing}
//                 rows={4}
//               />
//               <Textarea
//                 name="para4"
//                 value={content.para4}
//                 onChange={handleContentChange}
//                 isEditing={isEditing}
//                 rows={4}
//               />
//               <Textarea
//                 name="para5"
//                 value={content.para5}
//                 onChange={handleContentChange}
//                 isEditing={isEditing}
//                 rows={4}
//               />
//             </>
//           ) : (
//             <>
//               <Paragraph>{content.para1}</Paragraph>
//               <Paragraph>{content.para2}</Paragraph>
//               <Paragraph>{content.para3}</Paragraph>
//               <Paragraph>{content.para4}</Paragraph>
//               <Paragraph>{content.para5}</Paragraph>
//             </>
//           )}
//         </div>
//       </TextareaContainer>
//     </Contain>
//   );
// }

// export default AgentMain;


// import React from 'react';
// import EditableContent from './EditableContent';

// function AgentMain() {
//   const initialContent = {
//     para1: "Chris Haroun, an esteemed entrepreneur, educator, and author, founded The Haroun MBA Degree Program® with a mission to empower aspiring business professionals worldwide. With over 1.5 million online courses sold globally and a rich background at prestigious institutions like Goldman Sachs and Columbia University, Chris brings a wealth of real-world experience to his teachings.",
//     para2: "Chris's warm and engaging demeanor, combined with his practical insights, makes complex business concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all problems, infuses his teaching style with high energy and enthusiasm.",
//     para3: "Chris's warm and engaging demeanor, combined with his practical insights, makes complex business concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all problems, infuses his teaching style with high energy and enthusiasm.",
//     para4: "He fosters a supportive learning environment, ensuring students' success through direct yet empathetic communication. Chris's credibility is underscored by his recognition in top business publications and guest lectures at esteemed institutions like Berkeley and Stanford.",
//     para5: "Join Chris's courses on Udemy to experience personalized mentorship, practical benefits, and a supportive community that empowers you to achieve your highest potential in the business world."
//   };

//   return (
//     <EditableContent heading="Agent Persona" initialContent={initialContent} />
//   );
// }

// export default AgentMain;


import React from 'react';
import EditableContent from './EditableContent';

function AgentMain() {
  const initialContent = {
    para1: "Chris Haroun, an esteemed entrepreneur, educator, and author, founded The Haroun MBA Degree Program® with a mission to empower aspiring business professionals worldwide. With over 1.5 million online courses sold globally and a rich background at prestigious institutions like Goldman Sachs and Columbia University, Chris brings a wealth of real-world experience to his teachings.",
    para2: "Chris's warm and engaging demeanor, combined with his practical insights, makes complex business concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all problems, infuses his teaching style with high energy and enthusiasm.",
    para3: "Chris's warm and engaging demeanor, combined with his practical insights, makes complex business concepts accessible and relatable. His passion for education, rooted in the belief that it's the key to solving all problems, infuses his teaching style with high energy and enthusiasm.",
    para4: "He fosters a supportive learning environment, ensuring students' success through direct yet empathetic communication. Chris's credibility is underscored by his recognition in top business publications and guest lectures at esteemed institutions like Berkeley and Stanford.",
    para5: "Join Chris's courses on Udemy to experience personalized mentorship, practical benefits, and a supportive community that empowers you to achieve your highest potential in the business world."
  };

  return (
    <EditableContent heading="Character Persona Manager" initialContent={initialContent} />
  );
}

export default AgentMain;
