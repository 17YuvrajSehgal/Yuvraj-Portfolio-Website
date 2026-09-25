import {
    SiApacheairflow,
    SiApachespark,
    SiDatabricks,
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
    {name: "Databricks", Icon: SiDatabricks, color: "#FF3621"},
    {name: "Selenium", icon: selenium},
];

export const experiences = [
    {
        title: "Artificial Intelligence Researcher",
        company_name: "Brock University · Mitacs Accelerate fellowship with Ciena",
        icon: brocku,
        iconBg: "#161329",
        date: "Sep 2025 - Present",
        points: [
            "TraceSynth: developed constraint-guided diffusion models for generating production-quality Linux kernel traces across multiple trace channels — published at ACM FSE 2026 (Industry Track).",
            "Developed and evaluated Transformer-based denoising diffusion models for synthetic system-trace generation, achieving 87.2% F1-Macro on downstream system-diagnostic classification and improving performance by 104% at 4,096-token sequence length compared with shorter-context generation.",
            "Applied constraint-guided repair to enforce structural and system-level trace validity, improving downstream performance by up to 4.3 percentage points; investigated reduced-channel models that retained 97-99% of full-channel performance at substantially lower computational cost.",
            "LMAT: contributed to an adaptive tracing framework using language models for efficient system-behavior analysis — published in the Journal of Systems and Software (2026).",
            "Built an agentic incident-triage system using LangGraph, ReAct, LLM-based reasoning, telemetry, logs, and historical Jira data to support automated root-cause diagnosis and incident retrieval.",
            "Curated and processed large-scale microservice trace and log datasets from DeathStarBench and TrainTicket on GCP to support AIOps, incident analysis, and machine-learning research.",
        ],
    },
    {
        title: "AI/ML Engineer",
        company_name: "Mengalo",
        icon: mengalo,
        iconBg: "#161329",
        date: "Sep 2024 - Sep 2025",
        points: [
            "Designed, developed, and deployed production AI services and REST APIs using Python and FastAPI, containerized with Docker and deployed on GCP for business and customer-engagement automation.",
            "Built an LLM- and RAG-powered analytics platform using LangChain and Neo4j, combining natural-language querying, retrieval, and knowledge-graph representations to interact with operational data.",
            "Developed NLP and LLM pipelines for prompt engineering, information extraction, semantic processing, and knowledge-graph construction, integrating AI capabilities into production backend services.",
            "Designed data-processing workflows connecting application data, PostgreSQL, and Neo4j to support reliable retrieval and AI-driven analytics while maintaining controlled database access patterns.",
        ],
    },
    {
        title: "Research Assistant",
        company_name: "Brock University",
        icon: brocku,
        iconBg: "#161329",
        date: "Jan 2024 - Dec 2024",
        points: [
            "Developed AURA (AI-powered Unified Research Artifact Evaluation), an AI-driven pipeline for automated evaluation and analysis of research artifacts using Python, LLMs, OpenAI APIs, LangGraph, Neo4j, and vector search.",
            "Designed an end-to-end RAG and knowledge-graph architecture combining semantic retrieval, structured artifact metadata, and LLM-based reasoning to automate evidence extraction and artifact evaluation across 2,000+ research artifacts from 40 conferences.",
            "Built automated data-ingestion and document-processing pipelines to extract and normalize 30,000+ Markdown documents, transforming unstructured research artifacts into searchable representations for downstream AI analysis.",
            "Developed reusable evaluation workflows for extracting artifact capabilities, requirements, and supporting evidence, enabling systematic analysis of research reproducibility and artifact quality.",
        ],
    },
    {
        title: "Data Engineer",
        company_name: "Scotiabank",
        icon: scotiabank,
        iconBg: "#161329",
        date: "May 2024 - Aug 2024",
        points: [
            "Built an end-to-end Databricks-to-AlloyDB migration pipeline for up to 350 billion rows, covering data extraction, transformation, validation, loading, reconciliation, and performance optimization — improved downstream query performance by approximately 10x.",
            "Designed and implemented an incremental data-processing pipeline that reduced daily Databricks processing time from approximately 6 hours to 2 hours, cutting compute usage and accelerating downstream data availability.",
            "Developed and maintained production Apache Airflow DAGs in Astronomer for scheduled and incremental data workflows, integrating Databricks jobs, GCP Cloud Storage buckets, and downstream processing stages.",
            "Worked with Databricks Unity Catalog for governed data access and pipeline management, and supported production deployments through CI/CD workflows while maintaining scheduled Databricks jobs and data pipelines.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Scotiabank",
        icon: scotiabank,
        iconBg: "#161329",
        date: "May 2023 - Aug 2023",
        points: [
            "Built and deployed the bank's LMS platform using React, Node.js, REST-based backend microservices, Firestore, and GCP Cloud Run.",
            "Developed automated JUnit, Jest, and React Testing Library coverage, increasing test coverage by 15 percentage points to meet the bank's 85% quality mandate.",
        ],
    },
    {
        title: "QA Automation Engineer",
        company_name: "Scotiabank",
        icon: scotiabank,
        iconBg: "#161329",
        date: "Sep 2022 - Dec 2022",
        points: [
            "Automated 35+ regression scenarios for front-office financial systems using Java, Selenium, and Cucumber BDD, reducing manual testing effort by approximately 70%.",
            "Integrated automated test suites into Jenkins CI/CD workflows using Git and Bitbucket to support continuous validation and code review.",
            "Built automated Android and API test suites using Java, Selenium, Appium, and RestAssured, covering 15+ scenarios and reducing testing time by over 75%.",
            "Developed reusable API automation and reporting components, reducing validation time by approximately 50%.",
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
