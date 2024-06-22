import React from 'react';
import EditableContent from './EditableContent';

function PackageDetails() {
  const initialContent = {
    para1: "John Doe, a renowned software developer and open-source contributor, has worked on numerous high-profile projects. His expertise spans across various programming languages and frameworks.",
    para2: "John's passion for coding is matched by his dedication to mentoring young developers. He regularly speaks at tech conferences and contributes to educational platforms.",
    para3: "In his spare time, John enjoys exploring the latest tech trends and working on personal projects. His blog is a popular resource for developers seeking insights and tutorials on cutting-edge technologies.",
    para4: "John's contributions to open-source projects have earned him recognition in the tech community. His work is used by thousands of developers worldwide, and he continues to inspire others through his code and mentorship.",
    para5: "Join John's workshops and webinars to gain valuable knowledge and skills in software development. His hands-on approach and real-world examples make learning both engaging and effective."
  };

  return (
    <EditableContent heading="Package Overview" initialContent={initialContent} />
  );
}

export default PackageDetails;
