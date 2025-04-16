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
  figma,
  docker,
  Nextone,
  huelearn,
  Mindful,
  
  carrent,
  EyeDetectsoftware,
  jobit,
  Marketconnect,
  ThreeLevelAuthentication,
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
    title: "Mern Stack ",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Research & Developement",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Research Trainee",
    company_name: "Hue Learn",
    icon: huelearn,
    iconBg: "#383E56",
    date: "Sept 2024 - Present",
    points: [
      "Conducted research and developed AI/ML models to improve data-driven decision-making.",
      "Analyzed large datasets and implemented machine learning algorithms for various applications.",
      "Assisted in optimizing and fine-tuning models to enhance accuracy and efficiency.",
      "Collaborated with senior researchers to document findings and contribute to research papers."
    ],
  },
  {
    title: "AI & ML",
    company_name: " NextOne Solution ",
    icon: Nextone,
    iconBg: "#E6DEDD",
    date: "March 2024 - May 2024",
    points: [
      "Built and trained machine learning models for predictive analytics and automation.",
      "Preprocessed and analyzed datasets using Python, Pandas, and Scikit-learn.",
      "Deployed AI/ML models on cloud platforms like AWS (EC2, S3, Lambda) for real-time use.",
      "Worked with a team to implement AI-driven solutions in web and mobile applications."

    ],
  },
  {
    title: "Cloud Computing",
    company_name: "MindfulAl",
    icon: Mindful,
    iconBg: "#383E56",
    date: "Feb 2024 - July 2024",
    points: [
      "Designed and deployed cloud-based solutions using AWS services (EC2, S3, Lambda, RDS, etc.).",
      "Implemented serverless computing and optimized cloud storage and database solutions.",
      "Worked on cloud security and cost optimization to ensure efficient cloud resource management.",
     " Assisted in migrating applications to the cloud, improving scalability and performance."
    ],
  },
  
  {
    title: "Web Development",
    company_name: " NextOne Solution ",
    icon: Nextone,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Developed and maintained web applications using HTML, CSS, JavaScript, and React.js.",
      "Implemented responsive UI/UX designs to enhance user experience across multiple devices.",
      "Worked with backend technologies to integrate APIs and databases (MySQL, Firebase, etc.).",
      "Participated in debugging and performance optimization to improve application efficiency.",
    ],
  },

 
];

const testimonials = [

  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like kk does.",
    name: "Raj Kumar P",
    designation: "CEO",
    company: "NextOne Solution",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
 
];

const projects = [
  {
    name: "Eye-Detect-Software",
    description:
    " A special tool designed for people with disabilities that uses eye blinks or movements to understand their needs and help them communicate or control devices easily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: EyeDetectsoftware,
    source_code_link: "https://github.com/Kishorekk6342",
  },
  {
    name: "Three level Authentication",
    description:
    "A secure login system for sensitive websites that checks a user’s identity in three steps, such as a password, fingerprint, and a one-time code, to protect against unauthorized access.",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ThreeLevelAuthentication,
    source_code_link: "https://github.com/Kishorekk6342",
  },
  {
    name: "Direct Market Access",
    description:
      "A system that allows farmers to sell their products directly to end users without involving intermediaries, helping them get fair prices and faster market access.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Marketconnect,
    source_code_link: "https://github.com/Kishorekk6342",
  },
];

export { services, technologies, experiences, testimonials, projects };
