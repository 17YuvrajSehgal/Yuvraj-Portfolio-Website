import {
    SiApacheairflow,
    SiApachespark,
    SiFastapi,
    SiGooglecloud,
    SiKubernetes,
    SiMongodb,
    SiPostgresql,
    SiPytorch,
    SiScikitlearn,
    SiTensorflow,
} from "react-icons/si";

import {
    annStockCover,
    artifactToolCover,
    brocku,
    docker,
    incidentAgentCover,
    java,
    javascript,
    langchain,
    lmatCover,
    mengalo,
    newsHubCover,
    nodejs,
    noe4j,
    python,
    reactjs,
    rlTradingCover,
    scotiabank,
    selenium,
    spring,
    sql,
    traceDatasetCover,
    traceSynthCover,
    webSummaryCover,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "research",
        title: "Research",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const technologies = [
    {name: "Python", icon: python},
    {name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C"},
    {name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00"},
    {name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E"},
    {name: "LangChain", icon: langchain},
    {name: "FastAPI", Icon: SiFastapi, color: "#009688"},
    {name: "Neo4j", icon: noe4j},
    {name: "React", icon: reactjs},
    {name: "Node.js", icon: nodejs},
    {name: "Java", icon: java},
    {name: "Spring Boot", icon: spring},
    {name: "JavaScript", icon: javascript},
    {name: "SQL", icon: sql},
    {name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1"},
    {name: "MongoDB", Icon: SiMongodb, color: "#47A248"},
    {name: "Docker", icon: docker},
    {name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5"},
    {name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4"},
    {name: "Apache Airflow", Icon: SiApacheairflow, color: "#017CEE"},
    {name: "Apache Spark", Icon: SiApachespark, color: "#E25A1C"},
    {name: "Selenium", icon: selenium},
];

export const experiences = [
    {
        title: "Artificial Intelligence Researcher",
        company_name: "Brock University · Mitacs Accelerate fellowship with Ciena",
        icon: brocku,
        iconBg: "#161329",
        date: "Feb 2026 - Present",
        points: [
            "TraceSynth: developed constraint-guided diffusion models that generate production-quality Linux kernel traces — accepted at FSE 2026 (Industry Track).",
            "LMAT: contributed to an adaptive tracing approach for efficient system-behavior analysis using language models — published in the Journal of Systems and Software (JSS, 2026).",
            "Built an agentic incident-triage system (LangGraph + hypothesis-driven ReAct loop) correlating logs, telemetry, and historical Jira data for automated root-cause diagnosis.",
            "Curated large-scale microservice trace/log datasets from benchmark systems (DeathStarBench, TrainTicket) on GCP for AIOps research.",
        ],
    },
    {
        title: "AI Developer",
        company_name: "Mengalo",
        icon: mengalo,
        iconBg: "#161329",
        date: "Aug 2024 - Dec 2025",
        points: [
            "Built and deployed production AI services and REST APIs (Python, FastAPI) on Docker and GCP for business and customer-engagement automation.",
            "Designed an LLM- and RAG-powered analytics chatbot (LangChain, Neo4j) for real-time, natural-language querying over operational data.",
            "Built a full-stack AI inbox for automated, agentic message generation with a FastAPI backend and React frontend.",
            "Designed an automated pipeline for cleaning and transforming data from PostgreSQL into a Neo4j knowledge graph, powering NLP and prompt-engineering workflows.",
        ],
    },
    {
        title: "Research Assistant",
        company_name: "Brock University",
        icon: brocku,
        iconBg: "#161329",
        date: "Jan 2024 - Jan 2025",
        points: [
            "Built an artifact-documentation tool (Python OOP, OpenAI API, Neo4j) that analyzes conference acceptance probabilities and cut documentation time by ~90%.",
            "Created an open-source dataset of 2,000+ research artifacts across 40 conferences, projected to improve research efficiency by ~30%.",
            "Sole departmental recipient of the Match of Minds research scholarship.",
            "Conducted empirical research on the capability of generative AI to evaluate software artifacts.",
        ],
    },
    {
        title: "QA Automation Engineer",
        company_name: "Scotiabank",
        icon: scotiabank,
        iconBg: "#161329",
        date: "May 2024 - Aug 2024",
        points: [
            "Built Android test automation for 15+ scenarios (Java, Selenium, Appium), cutting testing time by over 75% for financial applications.",
            "Developed reusable UI/API automation libraries (Selenium, RestAssured) and an HTML/CSS reporting module, cutting validation time by ~50%.",
            "Collaborated with the business QA team to design test scenarios aligned with business requirements.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Scotiabank",
        icon: scotiabank,
        iconBg: "#161329",
        date: "May 2023 - Aug 2023",
        points: [
            "Engineered Python ETL/data pipelines to ingest, transform, validate, and reconcile operational data feeds, cutting manual file handling by 20%.",
            "Migrated and transformed up to 350 billion rows of data from Databricks to AlloyDB through large-scale data pipelines, improving query performance by 10x.",
            "Built the bank's LMS platform with a responsive ReactJS frontend and Node.js/REST backend microservices, deployed to GCP Cloud Run with Firestore persistence.",
            "Delivered a JUnit/Jest/React Testing Library test suite, raising coverage 15% to meet the bank's 85% mandate.",
        ],
    },
    {
        title: "QA Automation Engineer",
        company_name: "Scotiabank",
        icon: scotiabank,
        iconBg: "#161329",
        date: "Sep 2022 - Dec 2022",
        points: [
            "Automated 35+ regression scenarios for front-office financial systems (Selenium, Cucumber BDD, Java), reducing manual testing effort by ~70%.",
            "Integrated test suites into CI/CD with Jenkins, Git, and Bitbucket for automated deployments and code review.",
        ],
    },
];

export const publications = [
    {
        title: "TraceSynth: Generating Production-Quality Kernel Traces with Constraint-Guided Diffusion Models",
        authors: "Y. Sehgal, S. Patel, M. Panahandeh, N. Ezzati-Jivan, F. Tetreault",
        venue: "FSE 2026 · Industry Track",
        publisher: "ACM",
        badge: "FSE 2026",
        description:
            "A diffusion-based framework that generates synthetic kernel traces to augment limited real data for downstream ML tasks — modeling traces as multi-channel sequences with a Transformer-based denoising diffusion process and constraint-guided repair to enforce system invariants.",
        link: "https://dl.acm.org/doi/10.1145/3803437.3805222",
    },
    {
        title: "LMAT: An Adaptive Tracing Approach Based on Efficient System Behavior Analysis Using Language Models",
        authors: "K. Darvishi, M. Noferesti, Y. Sehgal, N. Ezzati-Jivan",
        venue: "Journal of Systems and Software, Vol. 238, Art. 112890 (2026)",
        publisher: "Elsevier",
        badge: "JSS 2026",
        description:
            "A language-model-based adaptive tracing framework for host-level observability: a multi-task model jointly predicts kernel event sequences and classifies event durations, raising trace granularity only when live traces deviate from predictions — cutting trace volume by 70.6% and reaching up to 97.7% accuracy in anomaly detection and root-cause identification.",
        link: "https://doi.org/10.1016/j.jss.2026.112890",
    },
];

export const education = [
    {
        degree: "M.Sc. Computer Science",
        school: "Brock University",
        date: "Sep 2025 - Sep 2027 (expected)",
        icon: brocku,
        points: [
            "Thesis-based; research in AI for systems and trustworthy, responsible AI.",
            "Mitacs Accelerate industrial fellowship with Ciena Corp.",
            "Teaching Assistant — COSC 3P97 Mobile Computing & COSC 3P95 Software Analysis & Testing.",
        ],
    },
    {
        degree: "B.Sc. (Honours) Computer Science, Intelligent Systems",
        school: "Brock University",
        date: "Jan 2021 - Jan 2025",
        icon: brocku,
        points: [
            "GPA 87/100 · Dean's Honour List (all years).",
            "Golden Key International Honour Society (top 15%).",
        ],
    },
];

export const awards = [
    "Mitacs Accelerate Fellowship — Ciena ($10K)",
    "Graduate Research Funding ($29,348)",
    "Match of Minds Scholarship — sole departmental recipient",
    "Golden Key International Honour Society (top 15%)",
    "Brock Entrance Scholarship ($6K)",
];

export const projects = [
    {
        name: "TraceSynth — Kernel Trace Generation",
        description:
            "Constraint-guided diffusion models that generate production-quality Linux kernel traces for systems and AIOps research. Accepted at FSE 2026 (Industry Track).",
        tags: [
            {name: "Diffusion Models", color: "blue-text-gradient"},
            {name: "PyTorch", color: "green-text-gradient"},
            {name: "Linux Tracing", color: "pink-text-gradient"},
        ],
        image: traceSynthCover,
        source_code_link: "https://github.com/17YuvrajSehgal/SyntheticLogGeneration",
        paper_link: "https://dl.acm.org/doi/10.1145/3803437.3805222",
    },
    {
        name: "LMAT — Adaptive Tracing with LLMs",
        description:
            "Language-model-based adaptive tracing that predicts kernel event sequences and raises trace granularity only on deviations — cutting trace volume by 70.6%. Published in JSS, Vol. 238 (2026).",
        tags: [
            {name: "LLMs", color: "blue-text-gradient"},
            {name: "Systems", color: "green-text-gradient"},
            {name: "JSS 2026", color: "pink-text-gradient"},
        ],
        image: lmatCover,
        source_code_link: "https://github.com/17YuvrajSehgal/adaptive_tracer",
        paper_link: "https://doi.org/10.1016/j.jss.2026.112890",
    },
    {
        name: "Agentic Incident Triage",
        description:
            "LangGraph agent with a hypothesis-driven ReAct loop that correlates logs, telemetry, and historical Jira data to automate root-cause diagnosis of microservice incidents.",
        tags: [
            {name: "LangGraph", color: "blue-text-gradient"},
            {name: "LLM Agents", color: "green-text-gradient"},
            {name: "AIOps", color: "pink-text-gradient"},
        ],
        image: incidentAgentCover,
        source_code_link: "https://github.com/17YuvrajSehgal/JiraAndLogs",
    },
    {
        name: "Microservice Trace Dataset",
        description:
            "Large-scale trace and log datasets curated from benchmark microservice systems (DeathStarBench, TrainTicket) on Google Cloud, built to support AIOps research.",
        tags: [
            {name: "AIOps", color: "blue-text-gradient"},
            {name: "GCP", color: "green-text-gradient"},
            {name: "Data Engineering", color: "pink-text-gradient"},
        ],
        image: traceDatasetCover,
        source_code_link: "https://github.com/17YuvrajSehgal/microservice-trace-dataset",
    },
    {
        name: "AURA — Artifact Evaluation Framework",
        description:
            "Automated framework for evaluating research software artifacts against conference guidelines (Python, OpenAI API, Neo4j) — cut documentation time by ~90%, backed by a dataset of 2,000+ artifacts across 40 conferences.",
        tags: [
            {name: "OpenAI API", color: "blue-text-gradient"},
            {name: "Neo4j", color: "green-text-gradient"},
            {name: "Research Tooling", color: "pink-text-gradient"},
        ],
        image: artifactToolCover,
        source_code_link: "https://github.com/17YuvrajSehgal/AURA",
    },
    {
        name: "RL Trading Agent — PPO",
        description:
            "Reinforcement-learning stock trading agent trained with Proximal Policy Optimization, learning allocation policies from historical market data.",
        tags: [
            {name: "Reinforcement Learning", color: "blue-text-gradient"},
            {name: "PPO", color: "green-text-gradient"},
            {name: "Python", color: "pink-text-gradient"},
        ],
        image: rlTradingCover,
        source_code_link: "https://github.com/17YuvrajSehgal/RL-StockPrediction-PPO",
    },
    {
        name: "Stock Prediction — ANN",
        description:
            "Stock price prediction system built on an artificial neural network with TensorFlow, demonstrating practical deep learning for financial forecasting.",
        tags: [
            {name: "TensorFlow", color: "blue-text-gradient"},
            {name: "Neural Networks", color: "green-text-gradient"},
            {name: "Python", color: "pink-text-gradient"},
        ],
        image: annStockCover,
        source_code_link: "https://github.com/17YuvrajSehgal/stock_prediction_using_ANN",
    },
    {
        name: "AI Web Summary Tool",
        description:
            "AI tool built with Java Spring Boot and the OpenAI API to summarize web pages — served as Scrum Master and backend developer for a team of five.",
        tags: [
            {name: "Spring Boot", color: "blue-text-gradient"},
            {name: "OpenAI", color: "green-text-gradient"},
            {name: "Java", color: "pink-text-gradient"},
        ],
        image: webSummaryCover,
        source_code_link: "https://github.com/17YuvrajSehgal/COSC-4P02-PROJECT",
    },
    {
        name: "NewsHub — Android App",
        description:
            "Feature-rich Android news app using News-API with categorical browsing, multilingual search, bookmarking backed by SQLite, and preference storage.",
        tags: [
            {name: "Android", color: "blue-text-gradient"},
            {name: "Java", color: "green-text-gradient"},
            {name: "SQLite", color: "pink-text-gradient"},
        ],
        image: newsHubCover,
        source_code_link: "https://github.com/17YuvrajSehgal/NewsHub",
    },
];
