export const personalInfo = {
  name: "Sondos Alqaisi",
  title: "AI & XR Engineer",
  subtitle: "Unreal Engine · Unity · Computer Vision · AI Agents",
  email: "sondosalqaisi323@gmail.com",
  availability: "Available for AI, XR, and game development projects",
  cvPath: "/Sondos_Alqaisi_CV.pdf",
  summary:
    "Artificial Intelligence graduate with hands-on experience spanning software development, machine learning, computer vision, data analytics, and AI agent design, alongside immersive XR/VR development using Unreal Engine and Unity. I build intelligent systems, deploy deep learning models, and create simulation-based applications across gaming, healthcare, science, and engineering.",
  intro:
    "I architect intelligent, immersive experiences—merging AI pipelines, computer vision, and real-time 3D engines to deliver optimized solutions across XR, gaming, and data-driven platforms.",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sondos24",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sondos-alqaisi-091a442bb",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:sondosalqaisi323@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sondos%2C%0A%0A",
    icon: "email",
  },
] as const;

export const aboutHighlights = [
  {
    title: "AI & Machine Learning",
    description:
      "Deep learning, computer vision (OpenCV, YOLO, MediaPipe), CNN architecture design, and AI agent orchestration with LangChain for autonomous decision pipelines.",
  },
  {
    title: "XR / VR / MR Development",
    description:
      "Immersive mixed reality experiences in Unreal Engine with AI-driven NPC behavior, real-time object detection, and environment interaction for next-generation spatial computing.",
  },
  {
    title: "Game & Simulation Engineering",
    description:
      "End-to-end development across Unity and Unreal Engine—behavior trees, AI perception systems, medical simulations, and engineering visualizations built for training and education.",
  },
];

export const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      "Deep Learning",
      "Computer Vision (OpenCV, YOLO, MediaPipe)",
      "CNN Architecture Design",
      "Object Detection & Tracking",
      "Image Classification",
      "TensorFlow / Keras",
      "Scikit-learn",
      "Model Integration & Deployment",
    ],
  },
  {
    title: "AI Agents & Automation",
    icon: "🤖",
    skills: [
      "AI Agent Design & Orchestration",
      "LangChain",
      "Autonomous Decision Pipelines",
      "NPC Behavior Systems",
      "Prompt Engineering",
      "Hugging Face Transformers",
    ],
  },
  {
    title: "XR / VR / AR / MR",
    icon: "🕶️",
    skills: [
      "Unreal Engine MR/VR Templates",
      "Mixed Reality Applications",
      "VR Experience Optimization",
      "Spatial Interaction Design",
      "SDK Integration",
    ],
  },
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      "Python",
      "C#",
      "Java",
      "JavaScript",
      "HTML / CSS",
      "SQL",
    ],
  },
  {
    title: "Game Development",
    icon: "🎮",
    skills: [
      "Unreal Engine",
      "Unity",
      "Behavior Trees",
      "AI Perception System",
      "VaRest Plugin",
      "Mobile Game Optimization",
      "Blender",
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      "Next.js / React",
      "Responsive Front-End",
      "Portfolio & Profile Systems",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cloud & Databases",
    icon: "☁️",
    skills: [
      "Firebase Real-Time Database",
      "Google Cloud Storage",
      "SQL & NoSQL",
      "Firebase Authentication",
    ],
  },
  {
    title: "Data Analysis",
    icon: "📊",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Preprocessing",
      "Statistical Analysis",
      "Sensor Data Analytics",
    ],
  },
  {
    title: "Tools & Productivity",
    icon: "🛠️",
    skills: [
      "GitHub Copilot",
      "ChatGPT",
      "Stable Diffusion",
      "Midjourney",
      "Arduino Programming",
      "Firebase",
    ],
  },
  {
    title: "Soft Skills",
    icon: "✨",
    skills: [
      "Problem Solving",
      "Cross-Domain Integration",
      "Self-Directed Learning",
      "Technical Communication",
      "Project Ownership",
      "Competitive Development",
    ],
  },
];

export const experience = [
  {
    company: "Beyond Universe",
    role: "AI/XR Developer",
    period: "2025 – 2026",
    responsibilities: [
      "Developed and deployed XR experiences using Unreal Engine for immersive mixed reality applications.",
      "Integrated AI-driven features including NPC behavior systems and real-time decision-making pipelines.",
      "Leveraged AI tools (GitHub Copilot, ChatGPT) to accelerate development workflows and code quality.",
      "Applied computer vision techniques for real-time object detection and environment interaction within XR environments.",
      "Conducted data analysis on user interaction metrics to optimize experience performance.",
    ],
    technologies: [
      "Unreal Engine",
      "Computer Vision",
      "OpenCV",
      "YOLO",
      "AI Behavior Trees",
      "GitHub Copilot",
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance AI & Game Developer",
    period: "2022 – 2025",
    responsibilities: [
      "Developed multiple mobile and PC games including survival and battlefield-style games.",
      "Implemented AI-driven NPC behaviors using Unreal Engine Behavior Trees and AI Perception System.",
      "Created immersive VR experiences optimized for various platforms.",
      "Integrated machine learning and deep learning models into games for advanced AI functionality.",
      "Worked with Firebase for real-time data integration and user management.",
      "Managed SQL and NoSQL databases for game content and analytics pipelines.",
    ],
    technologies: [
      "Unreal Engine",
      "Unity",
      "Firebase",
      "Behavior Trees",
      "Machine Learning",
      "SQL / NoSQL",
    ],
  },
];

export const projects = [
  {
    id: "ai-combat-game",
    title: "AI-Driven Combat Game",
    category: "Graduation Project",
    problem:
      "Traditional game AI lacks adaptive awareness and fails to respond dynamically to player movement and combat strategies in real time.",
    solution:
      "Built a graduation combat game in Unreal Engine with a dynamic enemy behavior system powered by Behavior Trees and AI Perception, enabling enemies to adapt tactics based on player positioning and visibility.",
    contribution:
      "Designed and implemented the full AI combat pipeline—behavior tree architecture, perception sensors, and computer vision-based player tracking for enhanced enemy awareness.",
    challenges:
      "Balancing AI responsiveness with performance while integrating real-time computer vision tracking into Unreal Engine's perception framework.",
    impact:
      "Delivered a capstone project demonstrating production-grade AI combat systems with adaptive enemy intelligence.",
    technologies: [
      "Unreal Engine",
      "Behavior Trees",
      "AI Perception",
      "Computer Vision",
      "C#",
    ],
    image: "/projects/ai-combat-game.jpg",
  },
  {
    id: "environmental-monitoring",
    title: "Environmental Monitoring System",
    category: "Data Analytics",
    problem:
      "Air pollution data from distributed sensors requires real-time ingestion, processing, and visualization to support actionable environmental insights.",
    solution:
      "Developed an air pollution tracking system with real-time sensor data ingestion via Firebase, processed with Pandas and visualized using Matplotlib and Seaborn.",
    contribution:
      "Built the end-to-end data pipeline—from Firebase ingestion and preprocessing to analytics dashboards that communicate environmental trends.",
    challenges:
      "Handling noisy sensor data and designing preprocessing workflows for reliable ML-ready datasets.",
    impact:
      "Enabled data-driven environmental monitoring with clear visual analytics for pollution trend analysis.",
    technologies: [
      "Python",
      "Firebase",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Analytics",
    ],
    image: "/projects/environmental-monitoring.jpg",
  },
  {
    id: "chemical-reaction",
    title: "Chemical Reaction Analysis Program",
    category: "AI / Scientific Computing",
    problem:
      "Students and researchers need a tool to analyze chemical compounds and predict possible reactions and their outcomes efficiently.",
    solution:
      "Built a Python program that analyzes chemical compounds and identifies possible chemical reactions using data-driven classification logic.",
    contribution:
      "Developed the analysis engine, reaction type classification system, and user-facing workflow to support chemistry learning and experimentation.",
    challenges:
      "Mapping complex chemical logic into structured, classifiable data patterns for reliable reaction prediction.",
    impact:
      "Created an educational tool that supports chemistry learning through automated reaction analysis.",
    technologies: ["Python", "AI", "Data-Driven Logic", "Classification"],
    image: "/projects/chemical-reaction.jpg",
  },
  {
    id: "portfolio-websites",
    title: "Multi-Platform Portfolio Websites",
    category: "Web Development",
    problem:
      "Personal profiles and team portfolios need responsive, professional web platforms to showcase project work and credentials effectively.",
    solution:
      "Designed and developed multiple responsive portfolio websites with modern front-end interfaces for personal profiles and team/project showcases.",
    contribution:
      "Full-stack front-end development—UI design, responsive layouts, and content architecture for multiple client and team portfolios.",
    challenges:
      "Creating reusable design systems that adapt across different branding requirements while maintaining performance.",
    impact:
      "Delivered polished web platforms that effectively present professional work and team credentials.",
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Responsive Design",
      "Next.js",
    ],
    image: "/projects/portfolio-websites.jpg",
  },
  {
    id: "dental-clinic",
    title: "Dental Clinic Simulation",
    category: "Medical Simulation",
    problem:
      "Dental training requires interactive, visual simulations that allow learners to practice procedures in a safe virtual environment.",
    solution:
      "Developed an interactive dental clinic simulation in Unreal Engine with modeled clinical environments and patient interaction scenarios.",
    contribution:
      "Built the 3D clinical environment, patient interaction flows, and procedure visualization systems for training purposes.",
    challenges:
      "Achieving realistic clinical interactions while maintaining intuitive UX for training scenarios.",
    impact:
      "Created an immersive training tool for dental procedure visualization and education.",
    technologies: ["Unreal Engine", "3D Modeling", "Medical Simulation"],
    image: "/projects/dental-clinic.jpg",
  },
  {
    id: "drone-simulation",
    title: "Drone Simulation & Disassembly",
    category: "Engineering Simulation",
    problem:
      "Understanding drone mechanics and internal component structure requires interactive 3D visualization beyond static diagrams.",
    solution:
      "Created a Unreal Engine simulation demonstrating drone components with step-by-step assembly and disassembly of interactive 3D parts.",
    contribution:
      "Modeled drone components, built interactive disassembly sequences, and designed the educational visualization workflow.",
    challenges:
      "Structuring complex mechanical hierarchies for intuitive step-by-step interaction.",
    impact:
      "Enabled engineers and students to visualize drone mechanics and internal structure interactively.",
    technologies: ["Unreal Engine", "3D Modeling", "Interactive Simulation"],
    image: "/projects/drone-simulation.jpg",
  },
  {
    id: "cardiac-anatomy",
    title: "Cardiac Anatomy Simulation",
    category: "Medical Visualization",
    problem:
      "Anatomy education benefits from interactive 3D models that reveal internal structures and blood pathways beyond textbook illustrations.",
    solution:
      "Built an interactive simulation of the human heart's internal structure and blood pathways in Unreal Engine for anatomy education.",
    contribution:
      "Designed the 3D heart model, blood pathway visualization, and interactive exploration system for medical training.",
    challenges:
      "Accurately representing anatomical structures while keeping interactions accessible for learners.",
    impact:
      "Delivered a medical training visualization supporting anatomy education with interactive 3D exploration.",
    technologies: ["Unreal Engine", "3D Visualization", "Medical Training"],
    image: "/projects/cardiac-anatomy.jpg",
  },
  {
    id: "blockchain-explainer",
    title: "Blockchain Concepts Explainer",
    category: "Educational Project",
    problem:
      "Blockchain technology concepts like decentralization and chain validation are difficult to grasp without clear, accessible explanations.",
    solution:
      "Developed an educational project explaining blockchain technology, its underlying mechanics, and core principles in an accessible format.",
    contribution:
      "Structured and presented core blockchain concepts—decentralization, blocks, and chain validation—for scientific and educational audiences.",
    challenges:
      "Translating complex distributed systems concepts into digestible educational content.",
    impact:
      "Created an accessible resource for understanding blockchain fundamentals.",
    technologies: ["Educational Design", "Technical Documentation"],
    image: "/projects/blockchain-explainer.jpg",
  },
  {
    id: "emergency-medical",
    title: "Emergency Medical Response Simulation",
    category: "Medical Simulation",
    problem:
      "Emergency medical training requires realistic scenario-based simulations to prepare responders for critical health situations.",
    solution:
      "Built a simulation for treating humans during medical emergencies, modeling response scenarios for emergency medical procedure training.",
    contribution:
      "Designed emergency response scenarios, patient interaction flows, and treatment procedure workflows.",
    challenges:
      "Balancing scenario realism with clear training objectives for emergency procedures.",
    impact:
      "Supported training in emergency medical procedures through interactive scenario-based simulation.",
    technologies: ["Unreal Engine", "Simulation", "Medical Training"],
    image: "/projects/emergency-medical.jpg",
  },
  {
    id: "hand-bone-recognition",
    title: "Hand & Bone Recognition System",
    category: "Computer Vision",
    problem:
      "Visualizing hand anatomy from standard images requires advanced detection and recognition of both external hand structure and internal bone layout.",
    solution:
      "Developed a computer vision system to detect and recognize the human hand and its internal bone structure using image processing and detection models.",
    contribution:
      "Built the detection pipeline, image processing workflow, and bone structure visualization from visual input.",
    challenges:
      "Achieving reliable hand detection and bone structure inference from varied visual inputs.",
    impact:
      "Delivered a CV system for hand anatomy visualization applicable to medical and educational use cases.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    image: "/projects/hand-bone-recognition.jpg",
  },
  {
    id: "kids-market-game",
    title: "Kids Market Game",
    category: "Educational Game",
    problem:
      "Children need engaging, interactive ways to learn financial literacy concepts beyond traditional classroom instruction.",
    solution:
      "Designed an interactive Unity educational game teaching children financial literacy through market-based gameplay mechanics.",
    contribution:
      "Developed game mechanics, educational content integration, and child-friendly UI/UX for financial concept learning.",
    challenges:
      "Making complex financial concepts accessible and engaging for young learners.",
    impact:
      "Created an educational game that introduces financial literacy through interactive play.",
    technologies: ["Unity", "C#", "Educational Game Design"],
    image: "/projects/kids-market-game.jpg",
  },
  {
    id: "unity-mobile-port",
    title: "Unity Mobile Port",
    category: "Mobile Optimization",
    problem:
      "Desktop games require significant optimization and UI redesign to deliver smooth performance and intuitive touch controls on mobile platforms.",
    solution:
      "Converted a desktop Unity game to mobile with optimized UI, performance tuning, and touch control implementation.",
    contribution:
      "Led the full mobile port—UI redesign, performance profiling, asset optimization, and touch input integration.",
    challenges:
      "Maintaining gameplay fidelity while meeting mobile performance constraints and adapting controls for touch.",
    impact:
      "Successfully delivered a performant mobile version with optimized user experience.",
    technologies: ["Unity", "Mobile Optimization", "C#", "Touch Controls"],
    image: "/projects/unity-mobile-port.jpg",
  },
];

export const certificates = [
  {
    title: "Game Development using Unity",
    issuer: "Coursera",
    year: "2023",
  },
  {
    title: "2D Game Development using Unity",
    issuer: "Professional Certification",
    year: "2024",
  },
  {
    title: "Game Development using Unreal Engine",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Python Programming",
    issuer: "DataCamp",
    year: "2022",
  },
  {
    title: "Virtual Reality (VR)",
    issuer: "DotJordan",
    year: "2024",
  },
  {
    title: "Python with Firebase",
    issuer: "DotJordan",
    year: "2022",
  },
  {
    title: "Unreal Engine with AI",
    issuer: "DotJordan",
    year: "2024",
  },
  {
    title: "Arduino Programming",
    issuer: "Zaha Cultural Center",
    year: "2026 – Present",
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Artificial Intelligence",
    institution: "Al-Zarqa University",
    period: "2025",
  },
  {
    degree: "Project Design Course",
    institution: "Al-Zarqa Private University",
    period: "2025 – 2026",
  },
];

export const achievements = [
  {
    title: "12th Place",
    event: "Dubai Digital Competition",
  },
  {
    title: "10th Place",
    event: "Crown Prince Award Competition",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

/** All unique technologies inferred from projects and experience */
export const allTechnologies = [
  ...new Set([
    ...projects.flatMap((p) => p.technologies),
    ...experience.flatMap((e) => e.technologies),
  ]),
].sort();
