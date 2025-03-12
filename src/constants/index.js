import {
    brocku,
    CompileVortex,
    confluence,
    css,
    cucumber,
    docker,
    git,
    html,
    java,
    javascript,
    langchain,
    mengalo,
    mhft,
    nodejs,
    noe4j,
    python,
    reactjs,
    scotiabank,
    selenium,
    spring,
    sql,
    termpw,
    weatherpedia
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

export const frameworks = [
    {title: "Spring", icon: spring},
    {title: "Langchain", icon: langchain},
];

export const technologies = [
    {name: "Java", icon: java},
    {name: "Python", icon: python},
    {name: "JavaScript", icon: javascript},
    {name: "HTML 5", icon: html},
    {name: "CSS 3", icon: css},
    {name: "React JS", icon: reactjs},
    {name: "Selenium", icon: selenium},
    {name: "Node JS", icon: nodejs},
    {name: "Cucumber", icon: cucumber},
    {name: "Git", icon: git},
    {name: "SQL", icon: sql},
    {name: "Neo4J", icon: noe4j},
    {name: "Spring", icon: spring},
    {name: "Docker", icon: docker},
    // {name: "Confluence", icon: confluence},
    // {name: "JIRA", icon: jira},
    // { name: "Bitbucket", icon: bitbucket },

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
        name: "Stock Market Prediction - Neural Network",
        description:
            "Advanced stock price prediction system utilizing Artificial Neural Network technology with TensorFlow, demonstrating practical application of deep learning in financial forecasting.",
        tags: [
            {name: "TensorFlow", color: "blue-text-gradient"},
            {name: "Neural Networks", color: "green-text-gradient"},
            {name: "Python", color: "pink-text-gradient"},
        ],
        image: mhft,
        source_code_link: "https://github.com/17YuvrajSehgal/stock_prediction_using_ANN",
    },
    {
        name: "News App - Android",
        description:
            "Feature-rich Android news application utilizing News-API, enabling categorical news browsing, multilingual search, bookmarking with built-in database support, and user preferences storage via shared preferences.",
        tags: [
            {name: "Android", color: "blue-text-gradient"},
            {name: "News-API", color: "green-text-gradient"},
            {name: "Java", color: "pink-text-gradient"},
            {name: "SQLite", color: "pink-text-gradient"},
        ],
        image: CompileVortex,
        source_code_link: "https://github.com/17YuvrajSehgal/NewsHub",
    },
    {
        name: "AI Powered Web Summary Tool",
        description:
            "Created an AI tool utilizing Java Spring Boot and OpenAI to summarize web pages, serving as Scrum Master for a team of five and a back-end developer.",
        tags: [
            {name: "Spring Boot", color: "blue-text-gradient"},
            {name: "OpenAI", color: "green-text-gradient"},
            {name: "Java", color: "pink-text-gradient"},
        ],
        image: weatherpedia,
        source_code_link: "https://github.com/17YuvrajSehgal/COSC-4P02-PROJECT",
    },
    {
        name: "Stock Market Prediction - Genetic Programming",
        description:
            "Designed a genetic programming model in Java operating on a regression algorithm and achieved over 80% accuracy in predicting NASDAQ and S&P 500 stock prices.",
        tags: [
            {name: "Java", color: "blue-text-gradient"},
            {name: "Genetic Programming", color: "green-text-gradient"},
            {name: "Regression", color: "pink-text-gradient"},
        ],
        image: mhft,
        source_code_link: "https://github.com/17YuvrajSehgal/Stock-Price-Prediction-Using-GP",
    },
    {
        name: "Village War Game",
        description:
            "Engineered a multiplayer game with advanced OOPs principles, improvising performance through a multi-threaded client-server model leveraging UDP.",
        tags: [
            {name: "Java", color: "blue-text-gradient"},
            {name: "UDP", color: "green-text-gradient"},
            {name: "Multithreading", color: "pink-text-gradient"},
            {name: "OOP", color: "pink-text-gradient"},
        ],
        image: termpw,
        source_code_link: "https://github.com/17YuvrajSehgal/VillageWar",
    },
];
