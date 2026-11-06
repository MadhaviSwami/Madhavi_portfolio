// site content

export const profile = {
  name: 'Madhavi Swami',
  initials: 'MS',
  greeting: "Hi, I'm a Computer Science Graduate",
  titles: ['Data Analyst', 'Data Scientist', 'AI/ML Enthusiast', 'Business Analyst'],
  intro:
    'I enjoy transforming raw data into meaningful insights and building intelligent solutions using Python, SQL, data visualization, and machine learning.',

  photo: '/profile.jpg',
  resume: '/Madhavi_Swami_Resume.pdf',

  email: 'madhaviswami609@gmail.com',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/madhavi-swami-0b8601355',
  github: 'https://github.com/MadhaviSwami',

  about: [
    'I am a Computer Science graduate with hands-on experience in Python, SQL, data analytics, data visualization, and machine learning fundamentals.',
    'I enjoy working with structured data, discovering patterns, building dashboards, and developing intelligent applications. I am continuously learning new technologies and looking for opportunities to contribute to real-world projects.',
  ],

  roles: ['Data Analyst', 'Data Scientist', 'Business Analyst', 'AI/ML Engineer'],
}

// formspree endpoint - if empty the form falls back to mailto
export const contactFormEndpoint = ''

export const skillGroups = [
  {
    title: 'Programming',
    icon: 'CodeXml',
    accent: 'from-blue-500 to-cyan-400',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Data Analytics',
    icon: 'ChartLine',
    accent: 'from-violet-500 to-blue-500',
    skills: [
      'Data Cleaning',
      'Data Preprocessing',
      'Data Validation',
      'Exploratory Data Analysis (EDA)',
      'Statistical Analysis',
      'Data Interpretation',
    ],
  },
  {
    title: 'Visualization',
    icon: 'ChartPie',
    accent: 'from-cyan-400 to-violet-500',
    skills: ['Microsoft Excel', 'Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Databases & SQL',
    icon: 'Database',
    accent: 'from-blue-500 to-violet-500',
    skills: ['MySQL', 'SQLite', 'Database Design', 'SQL Joins', 'CTEs', 'Window Functions'],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    accent: 'from-violet-500 to-cyan-400',
    skills: [
      'Machine Learning Fundamentals',
      'Face Recognition',
      'Computer Vision',
      'Feature Extraction',
      'Hugging Face',
      'AI Model Integration',
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    accent: 'from-cyan-400 to-blue-500',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
]

// thumbnail: sales | hr | face | fashion
export const projects = [
  {
    title: 'E-Commerce Data Analytics & Automated ETL Pipeline',
    category: 'Data Analytics',
    thumbnail: 'sales',
    period: 'Sep 2026 – Oct 2026',
    description:
      'An automated pipeline that cleans, validates and loads e-commerce data into MySQL, followed by SQL and Power BI analysis of revenue, customers and delivery performance.',
    highlights: [
      'Automated a Python ETL pipeline that cleans, validates (70 checks) and loads 450K+ e-commerce records into MySQL.',
      'Wrote 18 SQL analyses (CTEs, window functions) and DAX measures tracking R$ 15.7M revenue.',
      'Found 97% one-time buyers and 2x late deliveries in the Northeast, and recommended fixes worth an estimated R$ 280K.',
    ],
    tech: ['Python', 'Pandas', 'MySQL', 'SQL', 'Power BI'],
    github: 'https://github.com/MadhaviSwami/Ecommerce-ETL-Pipeline',
    demo: '',
  },
  {
    title: 'Criminal Detection Using Face Recognition',
    category: 'AI / Computer Vision',
    thumbnail: 'face',
    period: 'Oct 2026',
    description:
      'A full-stack face recognition system that detects faces in real time and matches them against a MySQL identity database.',
    highlights: [
      'Detects faces with YuNet and matches them using 128-dimension SFace embeddings and cosine similarity.',
      'Real-time webcam recognition at about 7 FPS (~125 ms per frame) with live face boxes, match percentages and best-match snapshot capture.',
      'Designed 12 REST API endpoints and a 3-table MySQL database with foreign-key cascades, recording every scan with its image, identity and confidence score.',
    ],
    tech: ['Python', 'Flask', 'OpenCV', 'YuNet', 'SFace', 'MySQL'],
    github: 'https://github.com/MadhaviSwami/Criminal-detection-face-recognition',
    demo: '',
  },
  {
    title: 'HR Employee Attrition Analysis',
    category: 'Business Analytics',
    thumbnail: 'hr',
    description:
      'Investigated why employees leave by analyzing attrition patterns and building interactive dashboards for HR decision-making.',
    highlights: [
      'Analyzed employee attrition patterns using SQL and Python.',
      'Analyzed attrition by department, tenure, and salary.',
      'Created dashboards using Excel and Power BI.',
      'Generated insights for employee retention.',
    ],
    tech: ['SQL', 'Python', 'Excel', 'Power BI'],
    github: 'https://github.com/MadhaviSwami',
    demo: '',
  },
  {
    title: 'FashionFit',
    category: 'AI / Full-Stack',
    thumbnail: 'fashion',
    period: 'May 2026 – Jun 2026',
    description:
      'A full-stack styling app combining a body-shape calculator, AI virtual try-on and personalised outfit tips.',
    highlights: [
      'Built a body shape calculator for 12 body shapes from body measurements and height.',
      'Built a virtual try-on feature using the IDM-VTON AI model to show uploaded clothes on a user’s photo.',
      'Added photo-based outfit tips for tops, bottoms, kurtis and sarees, by body shape and height.',
    ],
    tech: ['React', 'Flask', 'SQLite', 'Hugging Face'],
    github: 'https://github.com/MadhaviSwami/FashionFit',
    demo: '',
  },
]

// type: education | certification | activity
export const timeline = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science and Engineering',
    org: 'SVERI’s College of Engineering',
    period: 'Oct 2022 – May 2026',
    location: 'Pandharpur, Maharashtra',
    points: [],
  },
  {
    type: 'activity',
    title: 'Co-ordinator, SPIRIT Hackathon',
    org: 'SVERI’s College of Engineering',
    period: '',
    points: [
      'Coordinated a college-wide hackathon, managing participants, logistics, and sponsor collaboration to ensure successful execution.',
    ],
  },
  {
    type: 'activity',
    title: 'Member, Entrepreneurship Cell',
    org: 'E-Cell SVERI (under NEC, IIT Bombay)',
    period: '',
    points: [
      'Active member engaging in innovation-driven activities, startup discussions, and entrepreneurial events.',
    ],
  },
]
