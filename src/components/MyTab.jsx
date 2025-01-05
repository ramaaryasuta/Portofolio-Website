import React, { useState } from "react";

const MyTab = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const tabs = [
    {
      name: "Experience",
      content: [
         {
          title: "Mezink (Singapore)",
          role: "Flutter Developer (Remote)",
          year: "June 2024 - Present",
          desc: "Design, develop, and enhance new and existing features for the Mezink App and Campaign App Web by translating user-friendly interfaces from Figma to Flutter, ensuring smooth functionality and seamless user experiences, while proactively monitoring performance, identifying and addressing bugs, crashes, and other issues to deliver a reliable and high-quality product.",
        },
        {
          title: "FnDigital (Jakarta)",
          role: "Mobile Developer (Remote)",
          year: "November 2023 - April 2024",
          desc: "Crafted an innovative travel order application leveraging the versatile Flutter framework, integrating seamless functionality and intuitive user experiences. Additionally, contributed to enhancing project scalability and efficiency by developing reusable components tailored to the project's UI design, ensuring consistency and ease of maintenance throughout the development process.",
        },
        {
          title: "Computer Engineering (Diponegoro University)",
          role: "Mobile Developer",
          year: "August 2022 - February 2023",
          desc: "Engineered a cutting-edge prototype application for a repository system, harnessing the power of the Flutter framework to deliver a dynamic and user-friendly interface. Seamlessly integrated the application with a backend system through API utilization, ensuring robust connectivity and data synchronization. Collaborated closely with cross-functional teams from various divisions, fostering synergy and driving cohesive project execution.",
        },
      ],
    },
    {
      name: "Education",
      content: [
        {
          title: "Diponegoro University",
          degree: "Bachelor of Computer Engineering",
          year: "August 2020 - April 2024",
          desc: "Served as Assistant Coordinator of Multimedia Practical Class, assisted in Interface and Microprocessor Engineering and Mobile Programming Practical Classes, spoke for the Multimedia concentration at Exposure 2022, and developed an IoT-based flood monitoring and mitigation application for the final project. Specialized in Mobile Development.",
        },
        {
          title: "SMAN 5 Kota Jambi",
          degree: "Science",
          year: "August 2017 - May 2020",
          desc: "Led the arts division of the student council with 10 members, served as the head organizer for the school's annual arts performance in 2019, and actively participated in the National Student Art Festival (FLS2N).",
        },
      ],
    },
    {
      name: "Organization",
      content: [
        {
          title: "Computer Engineering Reseach Club (CERC)",
          role: "Head of Multimedia Division",
          year: "February 2023 - April 2024",
          desc: "Led a team of 15 members to enhance student skills in multimedia concentration by creating and implementing modules on 3D Modeling, Video Editing, Graphic Design, and Game Development",
        },
        {
          title: "Himpunan Mahasiswa Teknik Komputer",
          role: "Head of Student Interest and Skill Development",
          year: "September 2022 - August 2023",
          desc: "Supported the HIMASKOM president by leading the Student Interest and Skill Development division, overseeing a team of 19 staff to provide interest and skill development for Computer Engineering students, and supervising the division's work programs.",
        },
        {
          title: "Diponegoro Orchestra",
          role: "Multimedia Staff",
          year: "December 2022 - December 2023",
          desc: "Managed and supervised audio and video-focused work while creating designs and concepts for events.",
        },
        {
          title: "Diponegoro Orchestra",
          role: "Logistic Staff",
          year: "September 2021 - November 2022",
          desc: "Managed equipment and data collection for organizational tools and created the design and layout of event properties.",
        },
        {
          title: "Himpunan Mahasiswa Teknik Komputer",
          role: "Staff Sport Division",
          year: "April 2021 - September 2022",
          desc: "Led the Event as Head of Event for Computer Engineering Sport Week 2021 and spearheaded the Design, Decoration, and Documentation for TEKKOM EXPLORE 2021 at the Computer Engineering Department.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex-1 py-2 text-center transition-colors duration-300 ${
              activeTab === tab.name
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs
          .find((tab) => tab.name === activeTab)
          .content.map((item, index) => (
            <div key={index} className="flex items-start mb-6">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-1 mr-4"></div>
              <div className="transition-opacity duration-500 opacity-0 animate-fade-in">
                <div className="text-lg font-semibold text-gray-800">
                  {item.title}
                </div>
                <div className="text-sm text-gray-600">
                  {item.role || item.degree} - {item.year}
                </div>
                <p className="text-gray-700 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyTab;
