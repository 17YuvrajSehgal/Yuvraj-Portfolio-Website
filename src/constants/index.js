import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  scotiabank,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  brocku,
  CompileVortex,
  mengalo,
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

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI Developer",
    company_name: "Mengalo",
    icon: mengalo,
    iconBg: "#161329",
    date: "Aug 2024 - Present",
    points: [
      "Built a full-stack AI inbox for automated message generation powered with agentic AI using Python's Fast API and React.",
      "Utilized artificial intelligence for real-time data analytics using LLM RAG Chatbot with Python, LangChain, and Neo4j.",
      "Designed a database schema and an automated pipeline for cleaning and transforming data from a PostgreSQL relational database to a Neo4j graph database.",
      "Implemented code reviews, secure coding practices, git management, and agile methodologies, promoting productivity and code quality in startup environment.",
      "Collaborated with software development teams, product managers, and client stakeholders to identify improvements and new features for existing products.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Brock University",
    icon: brocku,
    iconBg: "#161329",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Received prestigious Match of Minds Scholarship for exceptional academic performance and research potential, as sole recipient in the department.",
      "Created an open-source dataset of over 2,000 research artifacts, promoting collaboration and accessibility; projected to improve research efficiency by 30%, accelerating discovery and innovation.",
      "Conducted empirical research with Professor to evaluate capability of generative AI in evaluating software artifacts for 40 conferences.",
      "Designed an Artifact Documentation tool with advanced OOPs in Python and OpenAI and Neo4j, analyzing conference acceptance probabilities with AI, decreasing documentation time by 90%.",
    ],
  },
  {
    title: "Automation Engineer Coop",
    company_name: "Scotiabank",
    icon: scotiabank,
    iconBg: "#161329",
    date: "May 2024 - Aug 2024",
    points: [
      "Learned Android automation and built automation for 20 test case scenarios using Java, Selenium, and Appium, reducing testing time by over 75% within four months.",
      "Developed a Java package with advanced OOPs concepts to manage boilerplate code for Android automation, maximizing reusability and saving time for future testing efforts.",
      "Collaborated with the business quality assurance team to design test case scenarios aligning with business requirements.",
      "Integrated a reporting module leveraging HTML/CSS to generate comprehensive test reports for each test case, to cut down the validation time by 50%.",
    ],
  },
  {
    title: "Full Stack Developer Coop",
    company_name: "Scotiabank",
    icon: scotiabank,
    iconBg: "#161329",
    date: "May 2023 - Aug 2023",
    points: [
      "Delivered a comprehensive test suite in Java JUnit and Karma for the LMS website, increasing test coverage by 15% and ensuring compliance with the bank's 85% minimum coverage mandate.",
      "Collaborated with another department to improvise an automation script written in Python; extended its functionality reducing manual file management time by 20%.",
    ],
  },
  {
    title: "Automation Engineer Coop",
    company_name: "Scotiabank",
    icon: scotiabank,
    iconBg: "#161329",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Automated web testing regression test suites utilizing Selenium and Cucumber BDD in Java, integrating with the bank's automation framework and reduced testing time by 70%.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/17YuvrajSehgal/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/17YuvrajSehgal/17YuvrajSehgal.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/17YuvrajSehgal/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/17YuvrajSehgal/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/17YuvrajSehgal/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/17YuvrajSehgal/Image_to_Pencil_Sketch_App",
  },
];
