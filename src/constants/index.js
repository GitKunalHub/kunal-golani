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
    title: "DoomSpace",
    company_name: "Starbucks",
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
    title: "Critics Green",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Spearheaded the end-to-end development of Critics Green, crafted from the ground up using React JS and TypeScript, showcasing skills acquired from scratch.",
      "Led the creation of a robust backend infrastructure utilizing Firebase, seamlessly integrating it with the front-end to establish a cohesive and efficient system.",
      "Developed custom APIs and implemented secure authentication protocols within Firebase, ensuring the confidentiality and integrity of user data while facilitating seamless interactions between the application's components.",
      "Through the development journey of Critics Green, gained invaluable expertise in React JS, TypeScript, and Firebase, demonstrating adaptability and a keen ability to learn and implement new technologies.",
    ],
  },
  {
    title: "Kommunitz",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022 - Oct 2022",
    points: [
      "Successfully incorporated React JS for dynamic user interfaces, while expanding skill sets to include 3D modeling and implementation through three.js, enhancing visual appeal and engagement.",
      "Applied responsive design methodologies within the React JS environment, prioritizing cross-browser compatibility to foster accessibility and inclusivity for a wider audience.",
      "Leveraged expertise in motion div animations, acquired from libraries like framer motion, to enrich user interactions, creating seamless and visually captivating experiences.",
      "Implemented EmailJS integration, enhancing communication capabilities by seamlessly incorporating email functionality, thereby optimizing user engagement and system notifications.",
    ],
  },
  {
    title: "3d Portfolio",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I would love to have at-least 30 projects in my initial working year. That would help me get some confidence for my future in this industry.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Before the end of 2030, I would like to see myself as a Senior Software Engineer with over 20+ Testimonials from respective firms.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I look forward to consistently approach my work with the same enthusiasm and spirit that I bring to programming, no matter what the task may be.",
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
