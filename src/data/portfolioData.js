export const personalInfo = {
  name: "Pandraju Rahul Karthikeya",
  shortName: "Rahul Karthikeya",
  role: "SDE & AI/ML Engineer",
  tagline: "Building High-Throughput Distributed Systems & Intelligent AI Architectures",
  location: "Andhra Pradesh, India",
  email: "rahulkarthikeya827@gmail.com",
  phone: "+91 94904 56320",
  bio: "Final-year B.Tech CSE (AI & ML) student at SRM University AP. Passionate about architecting backend-focused systems with React, FastAPI, Node.js, and PostgreSQL, as well as pushing boundaries in LLM reasoning (GRPO, LoRA, PyTorch). 1st place hackathon winner with a relentless drive for systems programming and distributed systems.",
  github: "https://github.com/rahulkarthikeya",
  linkedin: "https://linkedin.com/in/rahul-karthikeya-911932290",
  leetcode: "https://leetcode.com/u/Rahul0099/",
  resumeUrl: "#resume", // User can replace with a PDF link or put resume.pdf in public folder
  status: "Available for SDE & AI/ML Roles (2025/2026/2027)"
};

export const specializations = [
  {
    id: "sde",
    title: "Software & Systems Engineering",
    icon: "Server",
    gradient: "from-blue-500 to-indigo-600",
    description: "Designing low-latency, resilient backend architectures, concurrent systems, and distributed task processors.",
    highlights: [
      "Concurrent C++ key-value store with LRU cache & AOF persistence",
      "Worker-based distributed task queue with retries & idempotency",
      "Real-time WebSocket event streaming with Redis pub/sub scaling",
      "Production REST APIs with FastAPI, Express, PostgreSQL & Docker"
    ]
  },
  {
    id: "aiml",
    title: "AI / Machine Learning Engineering",
    icon: "Brain",
    gradient: "from-cyan-500 to-emerald-500",
    description: "Fine-tuning modern foundation models, reinforcement learning with programmatic verifiers, and computer vision systems.",
    highlights: [
      "GRPO reasoning optimization for Qwen2.5 on mathematical benchmarks",
      "LoRA and parameter-efficient fine-tuning with Hugging Face TRL",
      "Biometric access control pipelines using OpenCV & face recognition",
      "Reward design ablation studies and pass@1 evaluation benchmarks"
    ]
  }
];

export const projects = [
  {
    id: "convox",
    title: "ConvoX — Real-Time Social Messaging Platform",
    category: "fullstack",
    type: "Full-Stack System",
    status: "Featured",
    description: "Full-featured real-time chat application with sub-100ms message latency, dynamic group chats, social discovery engine, and an automated 4-strike moderation suite with real-time admin dashboard.",
    technologies: ["React 19", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "k6"],
    bullets: [
      "Built low-latency real-time layer with Socket.io delivering typing indicators, delivery receipts, and unread badges.",
      "Engineered social discovery with mutual-friend algorithms, live fuzzy search, and role-based permissions.",
      "Implemented four-strike automated moderation enforcement and real-time administrative telemetry.",
      "Scaling with Redis pub/sub adapter for multi-instance deployment and load-tested with k6."
    ],
    github: "https://github.com/rahulkarthikeya",
    demo: "#live-demo"
  },
  {
    id: "grpo-reasoning",
    title: "GRPO Reasoning Training for Small LLMs",
    category: "aiml",
    type: "AI & Reinforcement Learning",
    status: "In Progress",
    description: "Post-training Qwen2.5-1.5B with Group Relative Policy Optimization (GRPO) on GSM8K using programmatic correctness and format rewards to boost mathematical problem-solving capabilities without external teachers.",
    technologies: ["PyTorch", "Hugging Face TRL", "LoRA", "Qwen2.5-1.5B", "GSM8K", "Reinforcement Learning"],
    bullets: [
      "Formulated programmatic reward functions verifying step-by-step reasoning and syntax correctness.",
      "Benchmarked base models against SFT-only and SFT+GRPO on held-out reasoning datasets.",
      "Analyzing reward hacking and running reward-design ablation tests for verifiable pass@1 gains.",
      "Authored reproducible training scripts and lightweight LoRA adapter weight export workflows."
    ],
    github: "https://github.com/rahulkarthikeya",
    demo: null
  },
  {
    id: "minikv",
    title: "MiniKV — Concurrent In-Memory Key-Value Store",
    category: "sde",
    type: "Systems Programming",
    status: "In Progress",
    description: "High-performance Redis-inspired TCP in-memory key-value database written in modern C++, featuring custom thread-pooling, LRU cache eviction, TTL expiration, and Append-Only-File (AOF) durability.",
    technologies: ["C++", "TCP Sockets", "Multi-threading", "LRU Cache", "AOF Persistence", "Systems"],
    bullets: [
      "Engineered a thread pool server supporting multiple simultaneous client connections over raw TCP.",
      "Implemented O(1) LRU eviction policy alongside active and passive key TTL expiration.",
      "Designed append-only file persistence layer for crash recovery and state reconstruction.",
      "Benchmarked throughput and latency under high concurrent load with custom client harness."
    ],
    github: "https://github.com/rahulkarthikeya",
    demo: null
  },
  {
    id: "job-queue",
    title: "Distributed Job Queue & Task Scheduler",
    category: "sde",
    type: "Distributed Systems",
    status: "In Progress",
    description: "Fault-tolerant worker-based asynchronous task execution pipeline with automatic retries, exponential backoff, idempotent execution guarantees, and real-time monitoring REST endpoints.",
    technologies: ["FastAPI", "Redis", "PostgreSQL", "Docker", "GitHub Actions CI", "pytest"],
    bullets: [
      "Designed resilient worker architecture processing priority queues with atomic state transitions in Redis.",
      "Built idempotent job handling and exponential backoff retry policies with audit logs stored in PostgreSQL.",
      "Full containerization with multi-stage Docker builds and automated CI test suite via GitHub Actions.",
      "Integrated real-time system metrics endpoints and telemetry dashboard for task worker health."
    ],
    github: "https://github.com/rahulkarthikeya",
    demo: null
  },
  {
    id: "facegate",
    title: "FaceGate AI — Biometric Access Control System",
    category: "aiml",
    type: "Computer Vision & Backend",
    status: "Completed",
    description: "Contactless biometric security system performing real-time facial recognition, visitor authentication, and secure access logging via an optimized Python backend pipeline.",
    technologies: ["Python", "OpenCV", "face_recognition", "REST API", "Computer Vision"],
    bullets: [
      "Built real-time video stream face detection and identity matching for contactless gate management.",
      "Designed backend service managing authorized personnel registry and timestamped access audit trails.",
      "Optimized frame processing pipelines to maintain low inference latency on standard camera feeds."
    ],
    github: "https://github.com/rahulkarthikeya",
    demo: null
  }
];

export const skillsMatrix = [
  {
    category: "Programming Languages",
    icon: "Code",
    items: [
      { name: "C++", level: "Advanced", icon: "cpp" },
      { name: "Python", level: "Advanced", icon: "python" },
      { name: "JavaScript / ES6+", level: "Advanced", icon: "js" },
      { name: "C", level: "Intermediate", icon: "c" },
      { name: "SQL", level: "Proficient", icon: "sql" },
      { name: "HTML5 & CSS3", level: "Proficient", icon: "html" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    items: [
      { name: "Node.js & Express.js", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "PostgreSQL & SQLAlchemy", level: "Proficient" },
      { name: "MongoDB & Mongoose", level: "Proficient" },
      { name: "Redis (Caching & Pub/Sub)", level: "Working Knowledge" },
      { name: "Socket.io (WebSockets)", level: "Proficient" },
      { name: "REST APIs & JWT/RBAC", level: "Advanced" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    items: [
      { name: "PyTorch", level: "Proficient" },
      { name: "Hugging Face Transformers / TRL", level: "Proficient" },
      { name: "LoRA & PEFT", level: "Proficient" },
      { name: "Reinforcement Learning (GRPO)", level: "Active Research" },
      { name: "Computer Vision (OpenCV)", level: "Proficient" },
      { name: "Model Evaluation & Benchmarking", level: "Proficient" }
    ]
  },
  {
    category: "Frontend Engineering",
    icon: "Layout",
    items: [
      { name: "React (v18/19)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Working Knowledge" },
      { name: "Three.js", level: "Basic / Exploratory" },
      { name: "Vite & Modern Tooling", level: "Proficient" }
    ]
  },
  {
    category: "Tools, DevOps & Cloud",
    icon: "Cpu",
    items: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Docker & Containerization", level: "In Progress" },
      { name: "GitHub Actions (CI/CD)", level: "In Progress" },
      { name: "pytest & Unit Testing", level: "In Progress" },
      { name: "VS Code & Linux/Bash", level: "Proficient" },
      { name: "Salesforce CRM & Cloud", level: "Internship" }
    ]
  }
];

export const experience = [
  {
    role: "Software / Cloud Intern (Virtual)",
    organization: "Salesforce",
    period: "2025",
    type: "Internship",
    description: "Hands-on virtual program focusing on enterprise cloud computing architecture, CRM workflows, business process automation, and developer platform fundamentals.",
    achievements: [
      "Mastered Salesforce platform capabilities, cloud-native workflows, and enterprise data models.",
      "Completed guided architectural projects and earned the Salesforce Virtual Internship Certification."
    ]
  }
];

export const achievements = [
  {
    title: "1st Place Winner — Code for Change Hackathon",
    organization: "KL University",
    year: "2025",
    badge: "1st Place 🏆",
    description: "Led development within a team of 5 to conceptualize, architect, and deliver an impactful end-to-end software solution within a 24-hour sprint."
  },
  {
    title: "Top 30 Finalist — Code with Connection Hackathon",
    organization: "National Level",
    year: "2026",
    badge: "Top 2% 🌟",
    description: "Ranked among the top 30 finalists out of 1,500+ participants nationwide for engineering design and algorithmic problem solving."
  },
  {
    title: "Active Competitive Programming",
    organization: "LeetCode (Handle: Rahul0099)",
    year: "2024 – Present",
    badge: "DSA & Problem Solving",
    description: "Consistent problem solver focusing on Data Structures, Algorithms, Graphs, Dynamic Programming, and Low-Latency Optimization."
  }
];

export const education = {
  institution: "SRM University AP",
  degree: "B.Tech in Computer Science and Engineering (AI & ML)",
  duration: "Aug 2023 – May 2027",
  location: "Amaravati, Andhra Pradesh, India",
  cgpa: "7.56 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming (OOP)"
  ]
};
