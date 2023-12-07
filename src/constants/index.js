import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Critics Green",
    company_name: "React - Firebase",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Worked on the end-to-end development of Critics Green, crafted from the ground up using React JS and TypeScript, showcasing skills acquired from scratch.",
      "Led the creation of a robust backend infrastructure utilizing Firebase, seamlessly integrating it with the front-end to establish a cohesive and efficient system.",
      "Developed custom APIs and implemented secure authentication protocols within Firebase, ensuring the confidentiality and integrity of user data while facilitating seamless interactions between the application's components.",
      "Through the development journey of Critics Green, gained invaluable expertise in React JS, TypeScript, and Firebase, demonstrating adaptability and a keen ability to learn and implement new technologies.",
    ],
  },
  {
    title: "DoomSpace",
    company_name: "HTML CSS - C#",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using Dot Net and other related technologies.",
      "Collaborating with cross-functional teams including Classmates, project faculty, and others to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Sucessfully implemented Data Compression algorithms while uploading a post for better stability of the app.",
    ],
  },
  {
    title: "Kommunitz",
    company_name: "HTML JS - vb",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022 - Oct 2022",
    points: [
      "Learnt Building complex, responsive layouts with HTML and CSS like Utilizing grid layouts and flexbox for flexible content organization.",
      "Constructed Interactive elements like upvote/downvote buttons and comment threads.",
      "Worked on Designing efficient data models for posts, comments, users, and communities.",
      "Utilized VB libraries and frameworks for data manipulation and retrieval in the Project.",
    ],
  },
  {
    title: "3d Portfolio",
    company_name: "React js - three.js",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Combining React's powerful component-based architecture with Three.js' 3D capabilities.",
      "Implementing state management and data flow using React Hooks (e.g., useState, useEffect)",
      "Implementing hemispherical lights, directional lights, and ambient lights for dynamic illumination.",
      "Utilizing EmailJS library for sending email notifications directly from the website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am excited to explore various domains and technologies in the initial year of my career, expanding my skillset and becoming a well-rounded engineer.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Before the end of 2030, I would love to see myself as a Senior Software Engineer with over 20+ Testimonials from respective firms.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I look forward to approach my work with the spirit that I bring to programming, no matter the challenging aspect of tasks.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DoomSpace",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/GitKunalHub/DoomSpace",
  },
  {
    name: "Critics Green",
    description:
      "Critics Green is a groundbreaking platform that transcends traditional film and TV show databases. It not only serves as an extensive source of critical insights but also employs cutting-edge algorithms to intuitively suggest movies and TV shows tailored to individual preferences, ushering in a new era of curated entertainment discovery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/GitKunalHub/critics-green",
  },
  {
    name: "3D Portfolio",
    description:
      "3D Portfolio is a visually stunning and dynamically animated showcase, seamlessly integrating 3D models and arts to redefine the traditional portfolio experience. Through meticulous design and aesthetic precision, immersing viewers in a visually compelling narrative of creativity and skill.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "red-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GitKunalHub/kunal-golani",
  },
];

export { services, technologies, experiences, testimonials, projects };
