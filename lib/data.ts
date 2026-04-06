export const personalInfo = {
  name: 'Nandan Patel',
  fullName: 'Nandan Alpesh Patel',
  title: 'AI Engineer',
  subtitle: 'Computer Vision · Embedded Systems · Deep Learning · Web Dev',
  location: 'Ahmedabad, Gujarat, India',
  email: 'napassociate@gmail.com',
  phone: '+91-9426268778',
  github: 'https://github.com/NandanPaT-eL',
  linkedin: 'https://www.linkedin.com/in/patel-nandan',
  bio: 'Final-year Computer Engineering student at GCET building production-grade AI systems. Currently at ISRO Space Applications Centre researching generative models for PCB defect synthesis. I work across the full spectrum from GAN-based data pipelines and RAG chatbots to underwater ROVs and enterprise automation MVPs.',
}

export const stats = [
  { value: 'ISRO', label: 'Current' },
  { value: '9.57', label: 'CGPA' },
  { value: '3.5L', label: 'Grants Won' },
  { value: '5+', label: 'Internships' },
]

export const experience = [
  {
    id: 'isro',
    index: '01',
    company: 'ISRO — Space Applications Centre',
    shortName: 'ISRO SAC',
    role: 'Machine Learning Intern',
    period: 'Jan 2026 — Present',
    location: 'Ahmedabad, Gujarat',
    current: true,
    highlights: [
      'Completed development of internal research website using Java Servlet backend with DAO architecture pattern',
      'Developed PCB Structure Detection system using Segment Anything Model, Canny edge detection, and skeletonization to produce clean structural boundary overlays for hardware analysis',
      'Researching synthetic PCB defect image generation using Diffusion Models, cTransGAN, and SAGAN — multi-architecture comparative research for data augmentation at scale',
    ],
    stack: ['PyTorch', 'Diffusion Models', 'cTransGAN', 'SAGAN', 'SAM', 'OpenCV', 'scikit-image', 'CUDA', 'Java Servlet', 'Python'],
  },
  {
    id: 'coe',
    index: '02',
    company: 'Centre of Excellence — Digital Manufacturing',
    shortName: 'CoE BVM',
    role: 'Artificial Intelligence Intern',
    period: 'May 2025 — Aug 2025',
    location: 'Anand, Gujarat',
    subtitle: 'IITD-FSM Internship, AIA Foundation',
    current: false,
    highlights: [
      'Built a RAG-based intelligent chatbot delivering domain-specific responses for digital manufacturing queries using LangChain and Llama-3',
      'Integrated ChromaDB vector database for context-aware document retrieval with sub-second response latency',
      'Developed FastAPI backend with full speech recognition and synthesis for hands-free voice interaction in lab environments',
    ],
    stack: ['FastAPI', 'LangChain', 'Llama-3', 'ChromaDB', 'HuggingFace', 'RAG', 'SpeechRecognition', 'Python'],
    github: 'https://github.com/NandanPaT-eL/chatbot',
  },
  {
    id: 'energinai',
    index: '03',
    company: 'EnergInAI — Smart Energy Analytics',
    shortName: 'EnergInAI',
    role: 'Machine Learning Intern',
    period: 'Oct 2025 — Nov 2025',
    location: 'Madhya Pradesh',
    current: false,
    highlights: [
      'Engineered a novel Dual-Subnetwork NILM architecture integrating Self-Attention and parallel Dilated Convolutions for precise appliance-level energy disaggregation',
      'Packaged the Seq2Point model as a production RESTful API mapping aggregate mains power to individual AC consumption and operational status',
      'Architecture enables an estimated 15% energy savings for commercial clients through reliable peak demand management',
    ],
    stack: ['PyTorch', 'Dilated CNNs', 'Self-Attention', 'Seq2Point', 'CUDA', 'Pandas', 'scikit-learn', 'pytest', 'FastAPI'],
  },
]

export const hackathons = [
  {
    id: '5g',
    index: '01',
    title: '5G Innovation Hackathon',
    award: 'Finalist — 1.0 Lakh INR Grant',
    organizer: 'Dept. of Telecommunications, Govt. of India',
    description: 'Developed a complete biomedical signal orchestration pipeline. EMG and EOG signals extracted from body-deployed sensor nodes (Arduino R1 + ESP32), streamed in real-time to a Raspberry Pi, classified using signal processing algorithms, and used to actuate a robotic arm with precise movement control — fully hands-free, intent-driven.',
    stack: ['Arduino R1', 'ESP32', 'Raspberry Pi', 'Python', 'Signal Processing', 'EMG/EOG', 'Real-time Classification', 'Robotics'],
  },
  {
    id: 'robofest',
    index: '02',
    title: 'Robofest 4.0',
    award: 'Finalist — 2.5 Lakh INR Grant',
    organizer: 'National Robotics Competition',
    description: 'Led full system architecture and embedded integration of KRAKEN, a fully functional underwater ROV. Implemented CV-based barcode detection using OpenCV with real-time web interface communication between Flask server, Raspberry Pi controller, and ESP32 sensor nodes via I2C and UART protocols.',
    stack: ['Python', 'C++', 'OpenCV', 'Flask', 'Raspberry Pi', 'ESP32-S3', 'I2C', 'UART', 'UDP'],
    github: 'https://github.com/NandanPaT-eL',
  },
  {
    id: 'robocon',
    index: '03',
    title: 'ABU Robocon 2024',
    award: 'Junior CV/ML Engineer',
    organizer: 'Team GCET Robocon',
    description: 'Contributed computer vision and ML pipeline development for the national-level ABU Robocon competition. Built real-time object detection and tracking systems enabling precise robot navigation and task execution under competition conditions.',
    stack: ['Python', 'OpenCV', 'PyTorch', 'Computer Vision', 'Object Detection', 'ROS'],
  },
]

export const projects = [
  {
    id: 'skin-cancer',
    index: '01',
    title: 'Skin Cancer Classification',
    category: 'Deep Learning / Edge AI',
    period: 'Feb 2025 — Apr 2025',
    achievement: 'Published Research Paper',
    description: 'ResNet50-based deep learning model for multi-class skin lesion classification using transfer learning. Optimized with image augmentation, early stopping, and systematic hyperparameter tuning. Deployed as TensorFlow Lite model for low-latency inference on resource-constrained edge devices. Results published in peer-reviewed research.',
    stack: ['TensorFlow', 'Keras', 'OpenCV', 'ResNet50', 'TF Lite', 'Transfer Learning', 'Python'],
    github: 'https://github.com/NandanPaT-eL/Skin_Cancer_Detection',
  },
  {
    id: 'virtual-tryon',
    index: '02',
    title: 'Virtual Try-On System',
    category: 'Computer Vision / GAN',
    period: 'Jan 2025 — Apr 2025',
    achievement: null,
    description: 'AI-powered virtual clothing try-on system combining MODNet for precise background matting with GAN-based garment warping and deformation. Real-time rendering achieved using MediaPipe for accurate body landmark detection with dual-framework inference pipeline delivering sub-100ms response.',
    stack: ['MODNet', 'GAN', 'MediaPipe', 'OpenCV', 'PyTorch', 'TensorFlow', 'Python'],
    github: 'https://github.com/NandanPaT-eL/Virtual_Clothing_Tryon',
  },
]

export const freelance = [
  {
    id: 'radhe',
    index: '01',
    title: 'Radhe Dental Clinic',
    subtitle: 'Multispeciality & Implant Center',
    category: 'Client Website',
    period: 'Feb 2026',
    status: 'Live',
    description: 'Full production website for a multispeciality dental and implant center. Responsive layout, service presentation, appointment flow, and SEO-optimized structure. Delivered on deadline and currently in active use.',
    stack: ['Next.js', 'Tailwind CSS', 'SEO', 'Responsive Design'],
    live: 'https://www.radhedental.com',
    github: null,
  },
  {
    id: 'automate-pro',
    index: '02',
    title: 'Automate Pro',
    subtitle: 'Enterprise Document Automation',
    category: 'Full Stack MVP',
    period: 'January 2026 - Ongoing',
    status: 'In Development',
    description: 'MERN stack MVP for enterprise document processing. Two processing bots: Item Document Processing (manual/SFTP/FTP upload, queue management, Gemini OCR, part number extraction, LN validation, Infor IDM upload) and AP Invoice Bot (cost-based and order-based processing, ION API validation, invoice registration). Includes RAG bot for process Q&A. N-superuser auth system with 2-hour expiring access tokens.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'Redis', 'BullMQ', 'Gemini API', 'RAG', 'REST APIs', 'SFTP/FTP'],
    live: 'https://automate-pro-amber.vercel.app',
    github: null,
  },
  {
    id: 'starlight',
    index: '03',
    title: 'Starlight Android Store',
    subtitle: 'E-Commerce Application',
    category: 'Android Development',
    period: 'Apr 2024',
    status: 'Shipped',
    description: 'Full-featured Android e-commerce application built in Java. Complete product listing, cart management, checkout flow, and Firebase-backed authentication with cloud storage for product assets and user data.',
    stack: ['Java', 'Android Studio', 'Firebase Auth', 'Firebase Storage', 'REST APIs'],
    live: null,
    github: 'https://github.com/NandanPaT-eL/Starlight_Android_Studio',
  },
]

export const techStack = [
  {
    category: 'AI / Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'TF Lite', 'Keras', 'Scikit-learn', 'CUDA', 'NumPy', 'Pandas'],
  },
  {
    category: 'Generative Models',
    items: ['GANs', 'cTransGAN', 'SAGAN', 'Diffusion Models', 'VAE', 'Stable Diffusion'],
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'MediaPipe', 'SAM', 'ResNet50', 'BLIP', 'MODNet', 'YOLO'],
  },
  {
    category: 'NLP & Agentic AI',
    items: ['LangChain', 'RAG', 'HuggingFace', 'spaCy', 'Llama-3', 'Gemini API', 'ChromaDB', 'Transformers'],
  },
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C/C++', 'C#', 'PHP', 'ABAP'],
  },
  {
    category: 'Web & APIs',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Flask', 'Java Servlet', 'REST', 'MongoDB'],
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Docker', 'Redis', 'BullMQ', 'Git', 'GitHub', 'AWS S3', 'Firebase', 'Vercel', 'Nginx'],
  },
  {
    category: 'Embedded & IoT',
    items: ['Raspberry Pi', 'ESP32', 'Arduino', 'I2C', 'UART', 'UDP', 'SFTP/FTP', 'Infor IDM', 'ION API'],
  },
]

export const achievements = [
  {
    id: 'paper',
    index: '01',
    title: 'Published Research',
    subtitle: 'Peer-Reviewed Journal',
    description: 'Research paper on multi-class skin cancer classification using ResNet50 transfer learning accepted and published.',
  },
  {
    id: 'robofest',
    index: '02',
    title: 'Robofest 4.0 Finalist',
    subtitle: '2.5 Lakh INR Grant',
    description: 'Led KRAKEN underwater ROV team to national finals securing competitive research and development grant funding.',
  },
  {
    id: '5g',
    index: '03',
    title: '5G Hackathon Winner',
    subtitle: '1 Lakh INR Seed Funding',
    description: 'First place and seed funding for biomedical signal orchestration pipeline at DoT, Government of India hackathon.',
  },
  {
    id: 'sap',
    index: '06',
    title: 'SAP Advanced Certified',
    subtitle: 'April 2025',
    description: 'Advanced certification covering Machine Learning, IoT, Deep Learning, Computer Vision, and ABAP development.',
  },
]

export const education = [
  {
    degree: 'B.Tech, Computer Engineering',
    institution: 'G. H. Patel College of Engineering & Technology',
    location: 'Anand, Gujarat',
    period: '2022 — 2026',
    gpa: '9.57 / 10',
    note: 'up to VII Semester',
  },
  {
    degree: 'Minor — Internet of Things',
    institution: 'G. H. Patel College of Engineering & Technology',
    location: 'Anand, Gujarat',
    period: '2023 — 2025',
    gpa: '7.89 / 10',
    note: null,
  },
]

export const certifications = [
  { name: 'SAP Advanced Certification', issuer: 'SAP', date: 'April 2025', skills: ['Machine Learning', 'IoT', 'Deep Learning', 'Computer Vision', 'ABAP'] },
  { name: 'Introduction to Programming Using Python', issuer: 'HackerRank', date: '2023', skills: [] },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte Australia', date: '2023', skills: [] },
]
