export const PERSONAL_INFO = {
  name: "Naveen Jerald Xavier",
  shortName: "Naveen",
  role: "Data Analyst | Python & SQL Developer | Power BI Specialist",
  subRole: "Data Analyst",
  heroBio: "Data Analyst specializing in Python, SQL, Power BI, and statistical analysis. Experienced in building end-to-end data analytics pipelines, exploratory data analysis (EDA), and automated business dashboards for datasets exceeding 100,000 records.",
  aboutBio: "I am a Data Analyst with hands-on experience in Python, SQL, Power BI, and statistical data analysis. I specialize in data cleaning, feature engineering, exploratory data analysis (EDA), and data visualization. I build end-to-end data analytics and machine learning pipelines on datasets exceeding 100,000 records, delivering business intelligence dashboards and automated reporting workflows that improve decision-making and reduce manual effort.",
  pipeline: ["Raw Data", "Data Cleaning", "Feature Engineering", "EDA", "Visualization", "Business Decisions"],
  email: "jxnaveen@gmail.com",
  phone: "+91 9342301909",
  location: "India",
  github: "https://github.com/jxnaveen-naveen",
  linkedin: "https://linkedin.com/in/naveenjeraldxavier",
  youtube: "https://youtube.com/@datawithnaveen",
  resumePath: "/resume.pdf",
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Showcase", href: "#showcase" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const TYPING_ROLES = [
  "Data Analyst",
  "Python & SQL Specialist",
  "Power BI Dashboard Developer",
  "Statistical & EDA Specialist",
  "Machine Learning Pipeline Builder"
];

export const STATS = [
  { value: "Internship", label: "Data Analyst at iGenuine", numeric: 1 },
  { value: "100,000+", label: "Records Analyzed in Pipelines", numeric: 100000 },
  { value: "50,000+", label: "Rows Cleaned & Preprocessed", numeric: 50000 },
  { value: "40%", label: "Manual Effort Reduction", numeric: 40 },
];

export const SKILL_CATEGORIES = [
  {
    id: "analytics",
    title: "Data Analysis & ML",
    icon: "BarChart3",
    description: "Cleaning, feature engineering, statistical analysis, and predictive modeling.",
    skills: ["Data Analysis", "Data Cleaning", "Data Wrangling", "Feature Engineering", "Statistical Analysis", "EDA", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    proficiency: 95,
  },
  {
    id: "database",
    title: "Databases & Backend",
    icon: "Database",
    description: "Designing queries, aggregate functions, and backend server scripts.",
    skills: ["SQL", "MySQL", "Relational Databases", "Flask", "PostgreSQL", "Data Extraction", "Query Optimization"],
    proficiency: 92,
  },
  {
    id: "bi",
    title: "Business Intelligence & Visualization",
    icon: "PieChart",
    description: "Creating interactive Power BI dashboards, KPI tracking, and automated reporting.",
    skills: ["Power BI", "Dashboard Development", "Data Visualization", "Data Storytelling", "Reporting Automation", "KPI Tracking", "Excel"],
    proficiency: 90,
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    description: "Developing robust automation scripts and modern web software solutions.",
    skills: ["Python", "SQL", "Java", "HTML", "CSS", "JavaScript"],
    proficiency: 90,
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Wrench",
    description: "Utilizing software platforms and development tools for efficient analysis.",
    skills: ["Git", "GitHub", "Excel", "Jupyter Notebook", "VS Code"],
    proficiency: 94,
  },
  {
    id: "ai",
    title: "AI & Certifications",
    icon: "Sparkles",
    description: "Certified skills in Data Analytics, Java Software Development, and Google AI.",
    skills: ["Google AI (2026)", "Coursera Python & SQL (2024)", "NPTEL Java (2023)", "Machine Learning"],
    proficiency: 88,
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    year: "May 2025 – Jul 2025",
    title: "Data Analysis Intern",
    institution: "iGenuine",
    description: "Automated data workflows and preprocessed large-scale raw dataset records to generate actionable business intelligence.",
    highlights: [
      "Automated data processing workflows by developing Python scripts, reducing manual effort by ~40%.",
      "Cleaned and preprocessed 50,000+ rows of raw data, resolving missing values and structural inconsistencies.",
      "Delivered weekly summary reports and interactive data visualizations using Pandas and Matplotlib."
    ],
  },
  {
    year: "Aug 2022 – May 2026 (Expected)",
    title: "B.E. Computer Science and Engineering",
    institution: "Computer Science Department | CGPA: 7.4 / 10.0",
    description: "Studying core Computer Science concepts, relational databases, software engineering, and analytical modeling.",
    highlights: [
      "CGPA: 7.4 / 10.0",
      "Data Structures & Relational Database Management Systems (RDBMS)",
      "Algorithms, Python Programming & Object-Oriented Software Design"
    ],
  },
  {
    year: "2023 - 2026",
    title: "Industry Certifications",
    institution: "Coursera, NPTEL & Google",
    description: "Acquired accredited certifications in data analytics, software development, and artificial intelligence.",
    highlights: [
      "Python & SQL for Data Analysis — Coursera (2024)",
      "Java for Software Development — NPTEL (2023)",
      "Google AI — 2026"
    ],
  },
];

export const SERVICES = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    description: "Transforming complex, raw datasets into clean, actionable, and structured insights for executive decision-making.",
    icon: "TrendingUp",
  },
  {
    id: "dashboard-dev",
    title: "Dashboard Development",
    description: "Building intuitive, interactive Power BI and Excel executive dashboards to monitor real-time business KPIs.",
    icon: "LayoutDashboard",
  },
  {
    id: "sql-analytics",
    title: "SQL Analytics",
    description: "Writing complex, optimized SQL queries, CTEs, and window functions to extract and aggregate critical business metrics.",
    icon: "Database",
  },
  {
    id: "data-cleaning",
    title: "Data Cleaning",
    description: "Automating data wrangling, missing value handling, anomaly detection, and schema standardization using Pandas.",
    icon: "Filter",
  },
  {
    id: "bi-reporting",
    title: "Business Intelligence",
    description: "Developing metric-driven reports, cohort analyses, and data storytelling artifacts to guide growth strategies.",
    icon: "PieChart",
  },
  {
    id: "data-science",
    title: "Data Science & ML",
    description: "Building machine learning classification and regression models to predict customer churn, trends, and business outcomes.",
    icon: "Brain",
  },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Understand", desc: "Define business objectives, metrics, and core analytical questions.", icon: "HelpCircle" },
  { step: "02", title: "Collect Data", desc: "Gather structured & unstructured datasets from databases or APIs.", icon: "DownloadCloud" },
  { step: "03", title: "Clean Data", desc: "Handle missing values, outliers, duplicate records, and data types.", icon: "Sparkles" },
  { step: "04", title: "Explore Data", desc: "Conduct EDA to discover hidden patterns, distributions, and correlations.", icon: "Search" },
  { step: "05", title: "Analyze", desc: "Apply SQL aggregations, statistical tests, and machine learning models.", icon: "Cpu" },
  { step: "06", title: "Visualize", desc: "Craft executive charts, interactive filters, and BI dashboards.", icon: "BarChart" },
  { step: "07", title: "Generate Insights", desc: "Synthesize quantitative findings into clear, logical business conclusions.", icon: "Lightbulb" },
  { step: "08", title: "Recommend Actions", desc: "Provide strategic, actionable recommendations to drive high impact.", icon: "CheckCircle2" },
];
